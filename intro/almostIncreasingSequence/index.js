/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/**
 *
 * @param {number[]} sequence
 * @returns {boolean}
 */

const almostIncreasingSequence = sequence => {
  let increase = 0;
  for (let i = 0; i < sequence.length; i += 1) {
    if (sequence[i] <= sequence[i - 1]) {
      increase += 1;
      if (sequence[i] < sequence[i - 2] && sequence[i + 1] <= sequence[i - 1])
        return false;
    }
  }
  return increase <= 1;
};

console.log(almostIncreasingSequence([1, 3, 2, 1])); // false
console.log(almostIncreasingSequence([1, 3, 2])); // true
