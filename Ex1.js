//Square the value of every element in the array. Presume that you will only get numbers in the input array.
// Input: const input = [ 1, 2, 3, 4, 5 ];

const input = [1, 2, 3, 4, 5];
let output = input.map((num) => Math.pow(num, 2));
console.log(output);

//Result: [ 1, 4, 9, 16, 25]
