/**
 *
 * @param {number} n
 * @returns {number}
 */
function lateRide(n) {
  const h = n / 60;
  const min = n % 60;

  const res =
    Math.floor(h / 10) + (h % 10) + Math.floor(min / 10) + Math.floor(min % 10);

  return Math.floor(res);
}

// console.log(lateRide(240)); // 4
console.log(lateRide(808)); // 14
console.log(lateRide(1439)); // 19

/**
 * For n = 240, the output should be
lateRide(n) = 4.

Since 240 minutes have passed, the current time is 04:00. The digits sum up to 0 + 4 + 0 + 0 = 4, which is the answer.
 */
