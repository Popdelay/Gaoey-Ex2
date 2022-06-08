//Calculate median and mean
//Calculate the mean and median values of the number elements from the input array.

//Input: const input = [12, 46, 32, 64];

const input = [12, 46, 32, 64];

function medianResult(input) {
  let fix = input.sort((a, b) => a - b);
  if (input.length % 2 === 0) {
    let a = fix[fix.length / 2 - 1];
    let b = fix[fix.length / 2];
    let fixMedian = (a + b) / 2;
    return fixMedian;
  } else {
    let fixMedian = fix[input.length / 2 - 0.5];
    return fixMedian;
  }
}

function meanResult(input) {
  let fixMean = input.reduce((a, b) => a + b) / input.length;
  return fixMean;
}

function display(input) {
  let result = { mean: meanResult(input), median: medianResult(input) };
  console.log(result);
}

display(input);

//Result:  { mean: 38.5, median: 32 }
