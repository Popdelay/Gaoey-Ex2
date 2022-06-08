/*Exercise 17: Find the sum of the series upto n terms

Write a program to calculate the sum of series up to n term. 
For example, if n =5 the series will become 2 + 22 + 222 + 2222 + 22222 = 24690*/

//เขียนแบบ loop ธรรมดาแต่ใช้สูตรจากสมการคำนวน

let n = 5;
let x = 2;
let count = 0;
let result = [];
let output;

function factorial(n) {
  for (let i = 0; i < n; i++) {
    count += x * Math.pow(10, i);
    result.push(count);
    console.log(result);
  }
  output = result.reduce((a, b) => a + b);
  console.log(output);
}

factorial(n);

//Output: 24690
