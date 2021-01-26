exports.min = function min(array) {
  if (!array || array.length == 0) {
    return 0;
  }

  let numMin = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < numMin) {
      numMin = array[i];
    }
  }

  return numMin;
};

exports.max = function max(array) {
  if (!array || array.length == 0) {
    return 0;
  }

  let numMax = array[0];
  for (let i = 1; i < array.length; i++){
    if (array[i] > numMax){
      numMax = array[i];
    }
  }

  return numMax;
};

exports.avg = function avg(array) {
  if (!array || array.length == 0) {
    return 0;
  }

  let sum = array.reduce((a, b) => a + b);
  return sum / array.length;
};
