function matrixElementsSum(matrix: number[][]): number {
  let bannedIndex = [];
  let total = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let room = matrix[i][j];
      if (room === 0) {
        bannedIndex.push(j);
        // check if it doesn't exists in the array
      } else if (bannedIndex.indexOf(j) === -1) {
        total += room;
      }
    }
  }

  return total;
}

export { matrixElementsSum };
