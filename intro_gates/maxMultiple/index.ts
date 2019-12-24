function maxMultiple(divisor: number, bound: number): number {
  const x = bound % divisor;
  return bound - x;
}

console.log(maxMultiple(3, 10));
console.log(maxMultiple(2, 7));
