/* eslint-disable prefer-const */
/**
 *
 * @param {number[][]} image
 * @returns {number[][]}
 */
function boxBlur(image) {
  let res = Math.floor(
    [].concat(...image).reduce((a, b) => a + b, 0) / [].concat(...image).length
  );
  return [[res]];
}

const a = [
  [1, 1, 1],
  [1, 7, 1],
  [1, 1, 1],
];

const b = [
  [
    [7, 4, 0, 1],
    [5, 6, 2, 2],
    [6, 10, 7, 8],
    [1, 4, 2, 0],
  ],
];
const c = [
  [36, 0, 18, 9],
  [27, 54, 9, 0],
  [81, 63, 72, 45],
];
// [[40,30]]

/**
 *
 * @param {number[][]} image
 * @returns {number[][] || number[][][]}
 */
function boxBlur2(image) {
  let res = [];
  for (let y = 0; y < image.length - 2; y++) {
    let line = [];
    for (let x = 0; x < image[y].length - 2; x++) {
      let res = 0;
      let count = 0;
      for (let a = y; a < y + 3; a++) {
        for (let b = x; b < x + 3; b++) {
          res += image[a][b];
          count++;
        }
      }
      line.push(Math.floor(res / count));
    }
    res.push(line);
  }
  return res;
}

console.log(boxBlur2(c));
