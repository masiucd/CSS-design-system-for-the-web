function adjacentElementsProduct(inputArray: number[]): number {
  let highest = -Infinity;
  for (let i = 0; i < inputArray.length - 1; i++) {
    let left = inputArray[i];
    let right = inputArray[i + 1];
    if (left * right > highest) {
      highest = left * right;
    }
  }
  return highest;
}

export { adjacentElementsProduct };
