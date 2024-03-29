//Sum of every positive element

/*If the given input is an array of numbers, 
return the sum of all the positives ones. 
If the array is empty or there aren't any positive numbers, return 0. */

//Input: const input = [ 1, -4, 12, 0, -3, 29, -150];

const input = [1, -4, 12, 0, -3, 29, -150];

let output = input.filter((num) => num > 0).reduce((a, b) => a + b);
console.log(output);

//Result:  42
