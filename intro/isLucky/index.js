/**
 *
 Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.
 */

/**
 *
 * @param {number} n
 * @returns {boolean}
 */
function isLucky(n) {
  /**
   *
   * @param {number[] | string[]} arr
   * @param {number} sliceValue1
   * @param {number} sliceValue2
   * @returns {number}
   */
  const sumNum = (arr, sliceValue1, sliceValue2 = undefined) =>
    arr
      .slice(sliceValue1, sliceValue2)
      .map(Number)
      .reduce((a, b) => a + b, 0);

  const numArray = n.toString().split('');

  const middle = Math.floor(numArray.length) / 2;
  // const firstHalf = numArray
  //   .slice(0, middle)
  //   .map(Number)
  //   .reduce((a, b) => a + b, 0);
  // const secondHalf = numArray
  //   .slice(middle)
  //   .map(Number)
  //   .reduce((a, b) => a + b, 0);

  // return firstHalf === secondHalf;

  const x = sumNum(numArray, 0, middle);
  const y = sumNum(numArray, middle);
  return x === y;
}

console.log(isLucky(1230)); // true
