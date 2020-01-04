/**
 *
 * @param {number[]} inputArray
 * @param {number} elemToReplace
 * @param {number} substitutionElem
 */
function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  // let arr = [];
  // const notChangeNumIndex = [];
  // for (let i = 0; i < inputArray.length; i++) {
  //   if (inputArray[i] === elemToReplace) {
  //     arr.push(inputArray[i]);
  //   }
  //   if (inputArray[i] !== elemToReplace) {
  //     notChangeNumIndex.push(i);
  //   }
  // }
  // arr = arr.map(x => (x = substitutionElem));

  // console.log(arr);
  // let res;
  // for (const x of inputArray) {
  //   res = x;
  //   if (res === elemToReplace) {
  //     res += substitutionElem;
  //   }
  // }
  // return res;

  return inputArray.map(x =>
    x === elemToReplace ? (x = substitutionElem) : x
  );
}

const x = [1, 2, 1];
console.log(arrayReplace(x, 1, 3));
// [3, 2, 3]
