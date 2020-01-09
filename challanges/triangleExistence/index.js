/**
 *
 * @param {number[]} sides
 * @returns {boolean}
 */
function triangleExistence(sides) {
  // const [a, b, c] = sides;
  // const left = a + b;
  // const right = b + c;
  // let r = false;
  // // return sides.length > 0 ? left > c : right > a;
  // if (left > c && right < a) {
  //   r = true;
  // } else if (right > a && left < c) {
  //   r = true;
  // }

  // return r;
  const sorted = sides.sort((a, b) => a - b);
  const [a, b, c] = sorted;
  return a + b > c;
}

console.log(triangleExistence([1, 2, 10])); // false
console.log(triangleExistence([19, 19, 14])); // true
console.log(triangleExistence([13, 7, 5])); // false
// 1+2 = 3 and 3 is less then 10

/**
 * Check the existence of a triangle with the given side lengths.
 *  A necessary and sufficient condition for triangle existence is
 *  that the sum of any two
 *  of its sides must be strictly greater than the third side.
 */
