const rand = require('./rand')
const weightList = require('./weightList')

module.exports.pickStudent = (studentsOfBatch) => {
  const lastColors = []
  const list = ['green', 'red', 'yellow'];
  const weight = [0.17, 0.5, 0.33,];


  studentsOfBatch.map((student) => {
  	const lastColor =student.evaluation[student.evaluation.length-1].color
      lastColors.push({name: student.name, color: lastColor})
  })


  let random_num = rand.rand(0, weighed_list.length-1)
  let weighed_list = weightList.randomize(list, weight)
  let theColor = weighed_list[random_num]

  const studentOptions = lastColors.filter(function(student) {
  		return student.color === theColor
  })

  const luckyStudent = studentOptions[Math.floor(Math.random()*studentOptions.length)];


}



function percentageCount(theColor, studentsOfBatch){
  const array = studentsOfBatch.filter(function(el){
    return el.evaluation[el.evaluation.length-1].color === theColor
  })
  return array
}

const arrayhere = percentageCount(theColor, studentsOfBatch)
const luckyStar = arrayhere[Math.floor(Math.random()*arrayhere.length)];
console.log(luckyStar)
