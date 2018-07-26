function mutateMyStrings(stringOne, stringTwo){

  let splitOne = stringOne.split('');
  let splitTwo = stringTwo.split('');
  let mutateMyString = stringOne.concat('\n');
   
   for (let i = 0; i < splitOne.length; i++) {
    if (splitOne[i] !== splitTwo[i]){
     splitOne[i] = splitTwo[i];
      mutateMyString = mutateMyString.concat(`${splitOne.join('')}\n`);
       }
}
    return mutateMyString;
 

}