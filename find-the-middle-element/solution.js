var gimme = function (inputArray) {
  if (inputArray[0] > inputArray[1]) {
    if (inputArray[1] > inputArray[2]) return 1;
    else if (inputArray[0] > inputArray[2]) return 2;
    else return 0;
  }
  else {
    if (inputArray[0] > inputArray[2]) return 0;
    else if (inputArray[1] > inputArray[2]) return 2;
    else return 1;
  }
};