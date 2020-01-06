/* eslint-disable no-multi-assign */
/* eslint-disable prefer-const */
/**
 *
 * @param {number[]} arr
 * @returns {number}
 */
function arrayConversion(arr) {
  // let size = arr.length;
  // let sizingValue = size / 2 / 2;
  // let firstRound = [];
  // while (arr.length) {
  //   firstRound.push(arr.splice(0, sizingValue));
  // }
  // console.log(firstRound);
  // let sumArr = [];
  // let productArr = [];
  // for (let i = 0; i < arr.length; i += 2) {
  //   if (arr[i] !== undefined) {
  //     sumArr.push(arr[i] + arr[i + 1]);
  //   }
  // }
  // for (let i = 0; i < sumArr.length; i += 2) {
  //   // console.log(sumArr[i]);
  //   if (sumArr[i] !== undefined) {
  //     productArr.push(sumArr[i] * sumArr[i + 1]);
  //   }
  // }
  // console.log(sumArr);
  // console.log(productArr);
  // return productArr.reduce((a, b) => a + b);
}

const x = [1, 2, 3, 4, 5, 6, 7, 8];
let y = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
console.log(arrayConversion(x));
// console.log(arrayConversion(y));

// We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.
