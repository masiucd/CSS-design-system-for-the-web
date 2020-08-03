function arrayChange(xs: number[]): number {
  // keep track with a counter
  let count = 0;

  // loop through the array and check to se if
  //  the current value is less or equal to the next value in the array
  for (let i = 0; i < xs.length - 1; i++) {
    if (xs[i] >= xs[i + 1]) {
      let diff = xs[i] + 1 - xs[i + 1];
      xs[i + 1] = xs[i] + 1;
      count += diff;
    }
  }

  // keep track of the difference
  // sum the count with difference

  // return the count
  return count;
}

export { arrayChange };
