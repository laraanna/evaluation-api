const rand = require('./rand')
const weightList = require('./weightList')

module.exports.pickStudent = (studentsOfBatch) => {
  //for randomize
  const list = ['green', 'red', 'yellow'];
  const weight = [0.17, 0.5, 0.33,];

  let weighed_list = weightList.randomize(list, weight)
  let random_num = rand.rand(0, weighed_list.length-1)
  let theColor = weighed_list[random_num]

  const array = studentsOfBatch.filter(function(el){
    return el.evaluation[el.evaluation.length-1].color === theColor
  })
  return array

}
