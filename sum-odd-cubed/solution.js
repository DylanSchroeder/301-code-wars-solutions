function cubeOdd(arr) {
  console.log(arr);
  
  var myOddArray = arr.filter(function (int) {
      return int % 2 !== 0;
      
  });
  
  var myCubedArray = myOddArray.map(function (x) {
    return Math.pow(x, 3);
  });
  
  var mySumOfCubed = myCubedArray.reduce((a, b) => a + b);
  if (isNaN(mySumOfCubed)) 
  return undefined;
  return mySumOfCubed;
  }