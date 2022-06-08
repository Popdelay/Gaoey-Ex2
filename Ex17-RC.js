/*Exercise 17: Find the sum of the series upto n terms

Write a program to calculate the sum of series up to n term. 
For example, if n =5 the series will become 2 + 22 + 222 + 2222 + 22222 = 24690*/

//เขียนแบบการใช้ recursion จากสมการคำนวน

let n = 5;
let x = 2;

function factorial(start, end, sum) {
  if (start === end) {
    return 0;
  } else {
    let count = x * Math.pow(10, start) + sum;
    console.log(count);
    return count + factorial(start + 1, end, count);
  }
}

console.log(factorial(0, n, 0));
