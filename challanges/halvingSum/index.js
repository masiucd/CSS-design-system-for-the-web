/**
 *
 * @param {number} n
 * @returns {number}
 */
function halvingSum(n) {
  // const res = [];
  // for (let i = 1; i < n; i += 1) {
  //   if (i % 2 === 0) {
  //     res.push(i);
  //   }
  // }
  // return res.map(x => Math.floor(x / 2)).reduce((a, b) => a + b, 0);

  if (n <= 1) return n;
  return n + Math.floor(halvingSum(n / 2));
}

console.log(halvingSum(25)); // 47
