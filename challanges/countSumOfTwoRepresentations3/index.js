/**
 *
 * @param {number} n
 * @param {number} l  // l with r should be n
 * @param {number} r
 * @returns {number}
 */
function countSumOfTwoRepresentations3(n, l, r) {
  let count = 0;
  let lower = n / 2;
  let higher = n % 2 !== 0 && +1;

  while (lower >= 1 && higher <= r) {
    count += 1;
    higher += 1;
    lower -= 1;
  }
  return count - 1;
}

console.log(countSumOfTwoRepresentations3(6, 2, 4)); // 2
