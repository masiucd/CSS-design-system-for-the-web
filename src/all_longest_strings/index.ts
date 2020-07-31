function allLongestStrings(inputArray: string[]) {
  let xs = inputArray.map((val, index) => val.length);

  let max = Math.max(...xs);

  return inputArray.filter((val, index) => val.length === max);
}

export { allLongestStrings };
