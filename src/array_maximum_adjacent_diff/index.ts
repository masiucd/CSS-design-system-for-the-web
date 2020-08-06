function arrayMaximalAdjacentDifference(list: number[]) {
  let max = 0;

  for (let i = 0; i < list.length - 1; i++) {
    // console.log(list[i]);
    let absolute = Math.abs(list[i] - list[i + 1]);
    if (max < absolute) {
      max = absolute;
    }
  }
  return max;
}
