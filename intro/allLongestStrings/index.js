/* eslint-disable prefer-const */
/**
 *
 * @param {string[]} inputArray
 * @returns {string[]}
 */
// function allLongestStrings(inputArray) {
//   let max = 0;
//   const newStrArr = [];

//   for (let str of inputArray) {
//     if (max < str.length) {
//       max = str.length;
//     }
//     if (str.length === max) {
//       newStrArr.push(str);
//     }
//   }

//   return newStrArr;
// }

/**
 *
 * @param {string[]} inputArray
 * @returns {string[]}
 */
function allLongestStrings(inputArray) {
  let longest = 0;
  let res = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (longest < inputArray[i].length) {
      longest = inputArray[i].length;
    }
  }

  for (let val of inputArray) {
    if (val.length === longest) {
      res.push(val);
    }
  }
  return res;
}

// console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
console.log(
  allLongestStrings([
    'young',
    'yooooooung',
    'hot',
    'or',
    'not',
    'come',
    'on',
    'fire',
    'water',
    'watermelon',
  ])
);
