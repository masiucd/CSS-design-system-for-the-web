/* eslint-disable prefer-const */
/**
 *
 * @param {number[]} inputArray
 * @return {number}
 */
function avoidObstacles(inputArray) {
  // const arr = inputArray.sort((a, b) => a - b);

  // const lastValue = arr[arr.length - 1];
  // for (let i = 1; i < lastValue + 1; i++) {

  //   if (arr.every(val => val % i !== 0)) return i;
  // }

  for (let n = 1; ; n++) if (inputArray.every(x => x % n)) return n;
}

const x = [5, 3, 6, 7, 9];
console.log(avoidObstacles(x));
