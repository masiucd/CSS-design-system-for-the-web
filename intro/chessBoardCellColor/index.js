/* eslint-disable prefer-const */
/**
 *
 * @param {string} cell1
 * @param {string} cell2
 * @returns {boolean}
 */
function chessBoardCellColor(cell1, cell2) {
  let map = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
  };

  let x = map[cell1[0]] + Number(cell1[1]);
  let y = map[cell2[0]] + Number(cell2[1]);
  console.log(x, y);

  return x % 2 === y % 2;
}

function chessBoardCellColor2(cell1, cell2) {
  return (
    (cell1.charCodeAt(0) +
      Number(cell1[1]) +
      cell2.charCodeAt(0) +
      Number(cell2[1])) %
      2 ===
    0
  );
}
console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'D3'));

// 64 squarers
// 32 dark
// 32 light

// "A":1,
// "B":2,
// "C":3,
// "D":4,
// "E":5,
// "F":6,
// "G":7,
// "H":8,
