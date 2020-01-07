/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */
function arithmeticExpression(a, b, c) {
  if (a + b === c || a / b === c || a * b === c || a - b === c) return true;
  return false;
}

// console.log(arithmeticExpression(2, 5, 7)); // true
// console.log(arithmeticExpression(2, 3, 5)); // true
// console.log(arithmeticExpression(1, 2, 5)); // false
console.log(arithmeticExpression(6, 3, 3)); // true
