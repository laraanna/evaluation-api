// models/batch.js
const mongoose = require('../config/database')
const { Schema } = mongoose

const evaluationSchema = new Schema({
  color: { type: String, required: true },
  date: { type: Date, default: Date.now },
  remark: { type: String, required: true }
})

const studentsSchema = new Schema({
  name: { type: String, required: true },
  picture: { type: String, default: 'http://via.placeholder.com/500x180?text=No%20Image' },
  evaluation: [evaluationSchema]
})

const batchSchema = new Schema({
  number: { type: Number, required: true },
  startDate: { type: Date },
  endDate: { type: Date },
  students: [studentsSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('batches', batchSchema)
