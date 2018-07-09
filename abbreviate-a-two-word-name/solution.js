function abbrevName(name){

  var splitName = name.split(" ");
  console.log(splitName);
  return splitName[0].charAt(0) + "." + splitName[1].charAt(0);

}