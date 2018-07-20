function filter_list(l) {
  // Return a new array with the strings filtered out
  //let numbers = [1, 2, 3, 4];
  var array = l.slice(0);
  return array.filter((element)=> {
  return (parseInt(element) === element);
  });

}