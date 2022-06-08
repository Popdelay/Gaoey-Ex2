//Age difference from the youngest and oldest
//Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

/*Input:
const input = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];
  
*/

const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jeniffer",
    age: 65,
  },
];

let output = input.map((input) => input.age);
let max = Math.max(...output);
let min = Math.min(...output);
let Result = [min, max, max - min];
console.log(Result);

//Result:  [13, 67, 54]
