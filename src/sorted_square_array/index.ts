function sortedSquaredArray(array: number[]): number[] {
  return array
    .map(String)
    .map((x) => x.replace(/-/g, ""))
    .map(Number)
    .sort((a, b) => a - b)
    .map((x) => x * x);
}
export { sortedSquaredArray };
