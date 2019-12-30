/* eslint-disable prefer-const */
function arrayChange(inputArray) {
  let count = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      let difference = inputArray[i] + 1 - inputArray[i + 1];
      inputArray[i + 1] = inputArray[i] + 1;
      count += difference;
    }
  }
  return count;
}

const a = [1, 1, 1];
const b = [-1000, 0, -2, 0];
console.log(arrayChange(a));
