/* eslint-disable prefer-const */
/**
 *
 * @param {number} a
 * @param {number} x
 * @param {number} c
 * @returns {number}
 */
function extraNumberXX(a, b, c) {
  // if (a === b) return c;
  // if (b === c) return a;
  // if (c === a) return b;
  return [...arguments].filter(x => x !== a)[0];
}

function extraNumberX(a, b, c) {
  if (a === b) return c;
  if (b === c) return a;
  if (c === a) return b;
}

function extraNumber(a, b, c) {
  return a ^ b ^ c;
}

console.log(extraNumber(2, 7, 2));
console.log(extraNumber(5, 5, 3));
console.log(extraNumber(4, 3, 4));
console.log(extraNumber(46, 66, 46));
