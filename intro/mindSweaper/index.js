/**
 *
 * @param {boolean[][]} matrix
 * @returns {number[][]}
 */
function minesweeper(matrix) {
  const result = [].concat(...matrix).map(x => (x === true ? 1 : 2));

  console.log(result);

  let x;

  for (let i = 0; i < result.length / matrix[0].length; i++) {
    console.log(i);
  }
}

const a = [
  [true, false, false],
  [false, true, false],
  [false, false, false],
];
console.log(minesweeper(a));
