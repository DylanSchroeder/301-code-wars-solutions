function find_average(array) {
  return array.reduce((currentVal, nextVal) => currentVal + nextVal) / array.length;
}