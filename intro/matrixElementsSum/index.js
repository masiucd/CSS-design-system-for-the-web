/**
 *
 * @param {number[][]} matrix
 * @returns {number}
 */

function matrixElementsSumX(matrix) {
  const lastFloor = matrix[matrix.length - 1].reduce((a, b) => a + b, 0);
  const sum = [].concat(...matrix).reduce((a, b) => a + b, 0);
  // console.log(lastFloor);
  // console.log(sum - lastFloor);
  return sum - lastFloor;
}

/**
 *
 * @param {number[][]} matrix
 * @returns {number}
 */

function matrixElementsSum(matrix) {
  let total = 0;
  const hauntedRooms = [];
  for (let col = 0; col < matrix.length; col++) {
    for (let row = 0; row < matrix[col].length; row++) {
      if (matrix[col][row] === 0) {
        hauntedRooms.push(row);
      } else if (hauntedRooms.indexOf(row) === -1) {
        total += matrix[col][row];
      }
    }
  }
  return total;
}

console.log(
  matrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])
);
