function high(x){
  let wordsInStr = x.split(" ");
  console.log(wordsInStr);
  //Create a word object to compare too
  let wordObject = {};
  for(var x = 0; x < wordsInStr.length; x++){
          var eachWord = wordsInStr[x];
         wordObject[eachWord] = calculateWordValue(eachWord);
  }
  return Object.keys(wordObject).sort(function (a, b){
  return wordObject[b] - wordObject[a];
    })[0];
  }
  function calculateWordValue(eachWord){
  const lettersArray = " abcdefghijklmnopqrstuvwxyz";
      letters = eachWord.split("");
         var letterScore = 0;
      letters.forEach(function(letter) {
          letterScore = letterScore + lettersArray.indexOf(letter);    
  });
  return letterScore;
  }