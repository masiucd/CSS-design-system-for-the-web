function filteredArray<T>(arr: T[][], elem: T): T[][] {
  let newArr: T[][] = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].includes(elem)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
function filteredArray2<T>(arr: T[][], elem: T) {
  return arr.map((x) => !x.includes(elem) && x).filter(Boolean);
}

console.log(
  filteredArray2(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
      [19, 4, 9],
    ],
    3,
  ),
);
