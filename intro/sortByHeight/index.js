/* eslint-disable prefer-const */
/**
 *
 * @param {number[]} a
 * @returns {number[]}
 */
function sortByHeight(a) {
  let treesIndex = [];
  let heights = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      treesIndex.push(i);
    } else {
      heights.push(a[i]);
    }
  }

  let sorted = heights.sort((a, b) => a - b);
  for (let i = 0; i < treesIndex.length; i++) {
    sorted.splice(treesIndex[i], 0, -1);
  }
  return sorted;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
