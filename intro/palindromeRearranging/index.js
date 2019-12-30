/* eslint-disable prefer-const */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/**
 *
 * @param {string} inputString
 * @returns {boolean}
 */
function palindromeRearranging(inputString) {
  if (inputString.length <= 1) return true;
  const charMap = {};
  for (const char of inputString) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  let odds = 0;

  for (let key in charMap) {
    if (charMap[key] % 2 !== 0) odds += 1;
  }
  return !(odds > 1);
}

console.log(palindromeRearranging('zyyzzzzz'));
console.log(palindromeRearranging('aabb'));
console.log(
  palindromeRearranging('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa')
);
