/* eslint-disable prefer-const */
const swap = (arr, index1, index2) =>
  ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);

/**
 *
 * @param {number[]} a
 * @param {number[]} b
 * @returns {boolean}
 */
function areSimilar(a, b) {
  if (a.toString() === b.toString()) return true;
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) {
      arr1.push(a[i]);
      arr2.push(b[i]);
    }
  }

  arr1 = arr1.reverse();

  return !!(arr1.length === 2 && arr1.toString() === arr2.toString());
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
