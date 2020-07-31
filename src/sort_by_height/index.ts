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
  for (let [index, val] of treesIndexes.entries()) {
    res = insert(res, val, -1);
  }
  return res;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
