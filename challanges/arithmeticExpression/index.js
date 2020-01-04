/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */
function arithmeticExpression(a, b, c) {
  // if (c < a + b || c < a / b || c < a * b || c < a - b) return false;
  if (a + b === c) {
    return true;
  }
  if (a - b === c) {
    return true;
  }
  if (a / b === c) {
    return true;
  }
  if (a * b === c) return true;
  return false;
}

console.log(arithmeticExpression(2, 3, 5));
