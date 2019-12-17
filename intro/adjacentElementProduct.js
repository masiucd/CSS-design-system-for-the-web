/* eslint-disable prefer-const */
/**
 *
 * @param {number[]} inputArray
 * @returns {number}
 */
function adjacentElementsProduct(inputArray) {
  let res = inputArray[0] * inputArray[1];
  for (let i = 0; i < inputArray.length; i++) {
    res =
      inputArray[i] * inputArray[i + 1] > res
        ? inputArray[i] * inputArray[i + 1]
        : res;
    // console.log(r);
  }
  return res;
}

console.log(adjacentElementsProduct([4, 1, 2, 3, 1, 5]));
