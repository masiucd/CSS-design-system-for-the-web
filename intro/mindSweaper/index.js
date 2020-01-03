/**
 *
 * @param {boolean[][]} matrix
 * @returns {number[][]}
 */
function minesweeper(matrix) {
  // const result = [].concat(...matrix).map(x => (x === true ? 1 : 2));

  // let mind;

  // console.log(result);

  // console.log(result);
  // for (let i = 0; i < result.length / matrix[0].length; i++) {}

  // const foo = new Array(45).fill([]); // create an empty array with length 45

  const arr = [];
  for (let i = 0; i < matrix.length; i++) {
    arr.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      arr[i][j] = 0;

      if (matrix[i][j - 1] === true) {
        arr[i][j] += 1;
      }
      if (matrix[i][j + 1] !== undefined) {
        if (matrix[i][j + 1] === true) {
          arr[i][j] += 1;
        }
      }
    }
  }

  console.log(arr);
}

const a = [
  [true, false, false],
  [false, true, false],
  [false, false, false],
];

const b = [
  [true, false],
  [true, false],
  [false, true],
  [false, false],
  [false, false],
];
// console.log(minesweeper(a));
console.log(minesweeper(b));
