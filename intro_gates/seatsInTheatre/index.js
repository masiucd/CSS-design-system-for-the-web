/**
 *
 * @param {number} nCols
 * @param {number} nRows
 * @param {number} col
 * @param {number} row
 * @returns {number}
 */

const seatsInTheatre = (nCols, nRows, col, row) => {
  const totalSeats = nCols * nRows;
  const y = nCols - col;
  const x = nRows - row;

  return (y + 1) * x;
};

console.log(seatsInTheatre(16, 11, 5, 3));

/**
 * For nCols = 16, nRows = 11, col = 5, and row = 3, the output should be
seatsInTheater(nCols, nRows, col, row) = 96.
 */
