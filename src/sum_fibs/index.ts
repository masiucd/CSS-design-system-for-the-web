function sumFibs(num: number): number {
  let prev = 0;
  let current = 1;
  let res = 0;
  while (current <= num) {
    if (current % 2 !== 0) {
      res += current;
    }
    current += prev;
    prev = current - prev;
  }
  return res;
}

export { sumFibs };
// console.log(sumFibs(4));
// console.log(sumFibs(7));
// console.log(sumFibs(1000));
