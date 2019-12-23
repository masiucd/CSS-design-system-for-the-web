/* eslint-disable prefer-const */
// /**
//  *
//  * @param {number} n
//  * @returns {number}
//  */
// function largestNumber(n) {
//   const largest = '9'.repeat(n);

//   return parseInt(largest);
// }

// console.log(largestNumber(2)); // 99
// // console.log(largestNumber(1)); // 9

/**
 *
 * @param {number} n
 * @returns {number}
 */
function largestNumber(n) {
  let res = [];

  for (let i = 0; i < n; i++) {
    res.push(9);
  }
  let num = res.join('');
  return parseInt(num);
}

console.log(largestNumber(12));
