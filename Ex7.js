//n! with Map and Reduce
/*If the given input is a number, you should return the factorial of that number. 
The factorial of a natural number n is the product of the positive integers less than or equal to n. 
So, 2! = 2, 3! = 6, 4! = 24 and so on.
*/

//Input: const input = 6;

const input = 6;
let array_input = Array(input).fill(0);
let result = array_input
  .map((value, index) => index + 1)
  .reduce((acc, value) => acc * value);

console.log(result);

//Result: 720
