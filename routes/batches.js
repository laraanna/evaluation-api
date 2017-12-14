const router = require('express').Router()
const { Batch } = require('../models')
const passport = require('../config/auth')
const main =  require('../lib/main')

const authenticate = passport.authorize('jwt', {session: false})





router.get('/batches', authenticate, (req, res, next) => {
  Batch.find()
    .sort({ createdAt: -1 })
    .then((batches) => res.json(batches))
    .catch((error) => next(error))

  })
  .get('/batches/:id', (req, res, next) => {
    const id = req.params.id
    Batch.findById(id)
      .then((batch) => {
        if (!batch) { return next() }
        res.json(batch)
      })
      .catch((error) => next(error))
  })
  .get('/batches/:id/ask', (req, res, next) => {
    const id = req.params.id
    console.log('hi')

    Batch.findById(id)
      .then((batch) => {
        const studentOptions = main.pickStudent(batch.students)
        console.log(studentOptions)
        console.log('break')
        const luckyStar = studentOptions[Math.floor(Math.random()*studentOptions.length)]
        console.log(luckyStar)
        if (!batch) { return next() }
        res.json(luckyStar)
      })
      .catch((error) => next(error))
  })
  .post('/batches', authenticate, (req, res, next) => {
      let newBatch = req.body
      newBatch.authorId = req.account._id

      Batch.create(newBatch)
        .then((batch) => res.json(batch))
        .catch((error) => next(error))
    })
    .put('/batches/:id', authenticate, (req, res, next) => {
      const id = req.params.id
      const getEvaluation = req.body.evaluation
      const studentId = req.body.studentId
      const currentStudent = req.body.student

      Batch.findById(id)
        .then((batch) => {
          if(!batch) {return next()}


        // let thisStudent =  batch.students.filter(function(student) {
        //     return student.name === currentStudent.name
        // })


        const newStudents =  batch.students.map(student => {
            if ( student.name === currentStudent.name) {
              console.log('YEEEEES')
              student.evaluation.concat(getEvaluation)
            }
          return student
        })

        console.log(newStudents)

        // const newEvaluation = currentStudent.evaluation.concat(getEvaluation)
        // console.log(newEvaluation)

          const updatedBatch = {
            ...batch,
            students: newStudents

          }

          Batch.findByIdAndUpdate(id, { $set: updatedBatch }, { new: true })
            .then((batch) => res.json(batch))
            .catch((error) => next(error))
        })
      .catch((error) => next(error))
  })

    .patch('/batches/:id', authenticate, (req, res, next) => {
      const id = req.params.id
      const patchStudent = req.body.student

      console.log('Hi')
      console.log(patchStudent)

      Batch.findById(id)
        .then((batch) => {
          if(!batch) {return next()}

          const newStudent = batch.students
            newStudent.push(patchStudent)

          console.log(newStudent)

          const updatedBatch = {
            ...batch,
            students: newStudent
          }

          Batch.findByIdAndUpdate(id, { $set: updatedBatch }, { new: true })
            .then((batch) => res.json(batch))
            .catch((error) => next(error))
        })
      .catch((error) => next(error))
  })
    .delete('/batches/:id', authenticate, (req, res, next) => {
      const id = req.params.id
      Batch.remove({_id: req.params.id})
        .then((batch) => res.json(batch))
        .catch((error) => next(error))
    })

  module.exports = router
