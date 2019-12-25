/* eslint-disable prefer-const */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/**
 *
 * @param {string} s1
 * @param {string} s2
 * @returns {number}
 */
function commonCharacterCount(s1, s2) {
  const charMap1 = {};
  const charMap2 = {};

  for (const char of s1) {
    charMap1[char] = (charMap1[char] || 0) + 1;
  }

  for (const char of s2) {
    charMap2[char] = (charMap2[char] || 0) + 1;
  }

  for (const key in charMap1) {
    console.log(charMap1[key]);
    console.log(key);
  }
}

// console.log(commonCharacterCount('aabcc', 'adcaa')); // 3

/**
 *
 * @param {object} obj
 * @param {string} str
 * @returns {object}
 */
const charCount = (obj, str) => {
  for (let c of str) {
    obj[c] = (obj[c] || 0) + 1;
  }
  return obj;
};

/**
 *
 * @param {string} s1
 * @param {string} s2
 * @returns {number}
 */
function commonCharacterCount2(s1, s2) {
  let charMap1 = charCount({}, s1);
  let charMap2 = charCount({}, s2);

  let res = 0;
  for (let keys in charMap1) {
    if (charMap2.hasOwnProperty(keys) === true) {
      if (charMap2[keys] < charMap1[keys]) {
        res += charMap2[keys];
      } else {
        res += charMap1[keys];
      }
    }
  }
  return res;
}

console.log(commonCharacterCount2('aabcc', 'adcaa')); // 3
