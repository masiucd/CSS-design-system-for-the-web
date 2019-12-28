/**
 *
 * @param {number} min
 * @returns {string}
 */
const getTime = min => {
  const x = min / 60;
  return x.toFixed(2);
};

// console.log(getTime(240));
// console.log(getTime(808));

/**
 *
 * @param {number} n
 * @returns {number}
 */
function lateRide(n) {
  const h = n / 60;
  const min = n % 60;

  const res = h / 10 + (h % 10) + min / 10 + (min % 10);
  // return Math.floor(res);
  return h / 10 + (h % 10) + (min / 10 + (min % 10));
}

console.log(lateRide(240)); // 4
console.log(lateRide(808)); // 14

/**
 * For n = 240, the output should be
lateRide(n) = 4.

Since 240 minutes have passed, the current time is 04:00. The digits sum up to 0 + 4 + 0 + 0 = 4, which is the answer.
 */
