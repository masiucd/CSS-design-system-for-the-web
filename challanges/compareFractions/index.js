/**
 *
 * @param {number[]} a
 * @param {number[]} b
 * @returns {string}
 */
function fractionComparison(a, b) {
  /**
   *
   * @param {number} num1
   * @param {number} num2
   * @returns {number}
   */
  const divide = (num1, num2) => num1 / num2;

  const [a1, a2] = a;
  const [b1, b2] = b;

  if (divide(a1, a2) === divide(b1, b2)) {
    return '=';
  }
  if (divide(a1, a2) > divide(b1, b2)) {
    return '>';
  }
  return '<';
}

console.log(fractionComparison([3, 4], [6, 8]));
