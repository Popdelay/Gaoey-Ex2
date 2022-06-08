//Get name initials

//The given input is a string of multiple words with a single space between each of them.
// Abbreviate the name and return the name initials.

//Input:const input = 'George Raymond Richard Martin';

const input = "George Raymond Richard Martin";

let output = input
  .split(" ")
  .map((input) => input[0])
  .join("");

console.log(output);

//Result:'GRRM'
