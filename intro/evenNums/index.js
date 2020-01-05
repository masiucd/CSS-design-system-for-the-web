/**
 *
 * @param {number} n
 * @returns {boolean}
 */
function evenDigitsOnly(n) {
  const numStr = n.toString();
  let odd = 0;
  for (const x of numStr) {
    if (x % 2 !== 0) {
      odd += 1;
    }
  }
  return odd === 0;
}

console.log(evenDigitsOnly(248622)); // true
console.log(evenDigitsOnly(642386)); // false

function evenDigitsOnly2(n) {
  return !`${n}`.match(/[13579]/);
}
function evenDigitsOnly3(n) {
  return `${n}`.split('').every(x => x % 2 === 0);
}
