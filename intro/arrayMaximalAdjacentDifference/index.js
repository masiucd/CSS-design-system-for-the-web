/* eslint-disable prefer-const */
// /**
//  *
//  * @param {number[]} inputArray
//  * @returns {number}
//  */
// function arrayMaximalAdjacentDifference(inputArray) {
//   const sortedArr = inputArray.sort((a, b) => a - b).filter(x => x > 0);
//   let max = 0;
//   let min = sortedArr[0] === 0 ? sortedArr[0] + 1 : sortedArr[0];
//   for (let i = 0; i < sortedArr.length; i++) {
//     if (max < sortedArr[i]) {
//       max = sortedArr[i];
//     }
//   }
//   return max - min;
// }
// const x = [2, 4, 1, 0];
// const y = [1, 1, 1, 1];
// const c = [-1, 4, 10, 3, -2];
// console.log(arrayMaximalAdjacentDifference(x)); // 3
// console.log(arrayMaximalAdjacentDifference(y)); // 0
// console.log(arrayMaximalAdjacentDifference(c)); // 7

/**
 *
 * @param {number[]} inputArray
 * @returns {number}
 */
function arrayMaximalAdjacentDifference(inputArray) {
  let diff = Math.abs(inputArray[0] - inputArray[1]);

  for (let i = 0; i < inputArray.length; i += 1) {
    const current = Math.abs(inputArray[i - 1] - inputArray[i]);
    if (current > diff) {
      diff = current;
    }
  }

  return diff;
}
const x = [2, 4, 1, 0];
const y = [1, 1, 1, 1];
const c = [-1, 4, 10, 3, -2];

/**
 *
 * @param {number[]} inputArray
 * @returns {number}
 */
function arrayMaximalAdjacentDifference2(arr) {
  return Math.max(...arr.slice(1).map((x, i) => Math.abs(x - arr[i])));
}
console.log(arrayMaximalAdjacentDifference2(x)); // 3
console.log(arrayMaximalAdjacentDifference2(y)); // 0
console.log(arrayMaximalAdjacentDifference2(c)); // 7
