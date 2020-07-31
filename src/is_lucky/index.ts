function isLucky(n: number): boolean {
  let xs = n.toString().split("");
  let half = Math.floor(xs.length) / 2;
  let firstHalf = xs.slice(0, half);
  let secondHalf = xs.slice(half);

  return (
    firstHalf.map(Number).reduce((a, b) => a + b, 0) ===
    secondHalf.map(Number).reduce((a, b) => a + b, 0)
  );
}
export { isLucky };
