# 301-code-wars-solutions
Insert Dashes:
Problem Domain: Given a number we need to write a function that separates two odd numbers in a row with a dash. So if the number is 3457893 it would be 345-789-3.

https://www.codewars.com/kata/insert-dashes

Working with Nathan, we whiteboarded how we need to have a function that determines first if the number odd or even. Then we needed to tell to check each string and look for places where two odd numbers were next to each other. Finally you need to tell it to insert the dash in those places. In the code that meant we had to set the string to empty and then go back through after checking for the odd numbers and determine if the new string needed dashes or to be left alone (if it had even numbers instead).