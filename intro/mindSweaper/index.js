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

  const newArr = [];

  for (let i = 0; i < matrix.length; i++) {
    newArr.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      let cnt = 0;
      if (i > 0) {
        if (matrix[i - 1][j]) {
          cnt += 1;
        }
        if (matrix[i - 1][j + 1]) {
          cnt += 1;
        }
        if (matrix[i - 1][j - 1]) {
          cnt += 1;
        }
      }
      if (i < matrix.length - 1) {
        if (matrix[i + 1][j]) {
          cnt += 1;
        }
        if (matrix[i + 1][j + 1]) {
          cnt += 1;
        }
        if (matrix[i + 1][j - 1]) {
          cnt += 1;
        }
      }

      if (matrix[i][j + 1]) {
        cnt += 1;
      }
      if (matrix[i][j - 1]) {
        cnt += 1;
      }
      newArr[i].push(cnt);
    }
  }
  return newArr;
}

const directions = [
  [1, -1],
  [1, 0],
  [1, 1],
  [0, -1],
  [0, 1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
];

minesweeper2 = matrix =>
  matrix.map((row, y) =>
    row.map((col, x) =>
      directions.reduce(
        (count, i) =>
          (count += !!(matrix[y + i[0]] && matrix[y + i[0]][x + i[1]])),
        0
      )
    )
  );
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
