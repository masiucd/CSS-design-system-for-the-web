/**
 *
 * @param {number} n
 * @param {number} m
 * @returns {number}
 */
function divisorsSubset(n, m) {
  return Math.floor(m / n) * n;
}

// children = n
// piece of candy =m

console.log(divisorsSubset(3, 10));
// console.log(divisorsSubset(1, 2));
