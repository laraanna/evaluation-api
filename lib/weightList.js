module.exports.randomize = (list,weight) => {
  let weighed_list = [];

  // Loop over weights
  for (var i = 0; i < weight.length; i++) {
      var multiples = weight[i] * 100;

      // Loop over the list of items
      for (var j = 0; j < multiples; j++) {
          weighed_list.push(list[i]);
      }
  }

  return weighed_list;
}
