function insert<T>(arr: T[], index: number, newItem: T) {
  return [...arr.slice(0, index), newItem, ...arr.slice(index)];
}

function sortByHeight(a: number[]) {
  let treesIndexes = [];

  for (let [index, num] of a.entries()) {
    if (num === -1) {
      treesIndexes.push(index);
    }
  }

  let res = a.filter((x) => x > 0).sort((a, b) => a - b);
  for (let val of treesIndexes) {
    res = insert(res, val, -1);
  }
  return res;
}
export { sortByHeight };
