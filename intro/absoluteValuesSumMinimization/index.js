/* eslint-disable prefer-const */
/**
 *
 * @param {number[]} a
 * @returns {number}
 */
function absoluteValuesSumMinimization(a) {
  const isEven = a.length % 2 === 0;

  return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7])); // 4
console.log(absoluteValuesSumMinimization([2, 3])); // 2

/**
 * For a = [2, 4, 7], the output should be absoluteValuesSumMinimization(a) = 4.

for x = 2, the value will be abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7.
for x = 4, the value will be abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5.
for x = 7, the value will be abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8.
The lowest possible value is when x = 4, so the answer is 4.
 */
