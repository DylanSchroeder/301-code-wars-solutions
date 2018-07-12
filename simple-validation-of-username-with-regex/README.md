# 301-code-wars-solutions
Simple validation of username with regex:
Problem Domain: 

https://www.codewars.com/kata/simple-validation-of-a-username-with-regex

Working with John, we whiteboarded our solution saying that we needed to take a string and check if it matched the criteria (lowercase or numbers or underscore and length). If the string matched any those then the validate would return true, if the string input didn't match those then it would return false. So in the actual code, in the square bracekts we want to check for the first three criteria all at once so they all fit in the same bracket. We then needed to add the length, so after the square brackets we check the length by putting {num, num}. You add the carrot before everthing and the $ after so it is chekcing for those criteria exactly.