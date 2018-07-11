function insertDash(num) {
  var last = '';
  var newString = '';
  
  num = num.toString();
   
  for (var i=0; i<num.length; i++){
    var current = parseInt(num[i])%2;
    if (current ===1 && last ===1){
      newString=newString + '-' + num[i];
      last=1;
    } else {
    newString=newString + num[i];
    last=current;
    }
    
  }
  return newString;
}