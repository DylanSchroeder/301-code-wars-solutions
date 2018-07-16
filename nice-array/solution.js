function isNice(arr){
  var happiness = 0;
  arr.forEach((num) => {
    if(arr.includes(num + 1) || arr.includes(num-1)) {
      happiness ++;
    } 
  })
  return (happiness===arr.length && happiness!==0 ? true : false)
}