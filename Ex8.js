//Count elements in array of arrays
/* Count the occurrences of distinct elements in the given 2D array. 
The given input is an array, the elements of which are arrays of strings. 
The result is an object whose property names are the values from the arrays and their value is the number of their occurrences. */

/*Input:
 const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];
  */

const input = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];

function countElements(num) {
  let array_input = num.flat();
  return array_input.reduce((Obj, index) => {
    if (index in Obj) {
      Obj[index]++;
    } else {
      Obj[index] = 1;
    }
    return Obj;
  }, {});
}

console.log(countElements(input));

/*Result:
   {
    a: 1,
    b: 1,
    c: 2,
    d: 2,
    f: 2,
    g: 1,
  }
  */
