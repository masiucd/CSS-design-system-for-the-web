/**
 *
 * @param {number} left
 * @param {number} right
 * @returns {number[]}
 */
function onlyEvenNumbers(left, right) {
  const res = [];
  for (let i = left; i <= right; i += 1) {
    if (i % 2 === 0) {
      res.push(i);
    }
  }
  return res;
}

// left: 5
// right: 10

console.log(onlyEvenNumbers(5, 10));
