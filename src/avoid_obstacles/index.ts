function avoidObstacles(arr: number[]) {
  let jump = 2;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % jump === 0) {
      jump++;
      console.log("i ", i, "jump  ", jump);
      i = -1;
    }
  }
  return jump;
}
function avoidObstacles2(arr: number[]) {
  let jump = 2;
  while (arr.some((x) => x % jump === 0)) {
    jump++;
  }
  return jump;
}

// What is the first integer after 1
// which none of the elements in the array can
//  be evenly divided by? Sorting the array is not needed and won't help.

// console.log(avoidObstacles([5, 3, 6, 7, 9]));
// console.log(avoidObstacles([2, 3]));
// console.log(avoidObstacles2([1, 4, 10, 6, 2]));

export { avoidObstacles, avoidObstacles2 };
