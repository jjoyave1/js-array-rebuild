//Reconstruction of .map method

var dotMap = function(array, func) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    output.push(func(array[i]));
  }
  return output;
};


//Reconstruction of .reduce method

var dotReduce = function(array, func) {
  total = array[0];
  for (var i = 0; i < array.length - 1; i++) {
    var total = func(total, array[1 + i]);
  }
  return total;
};


//Reconstruction of .filter method

var dotFilter = function(array, func) {
  filtered = [];
  for (var i = 0; i < array.length; i++) {
    if (func(array[i]) == true) {
      filterOutput.push(array[i]);
  } }
  return filtered;
};
