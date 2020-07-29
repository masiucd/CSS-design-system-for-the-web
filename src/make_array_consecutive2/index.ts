function makeArrayConsecutive2(statues: number[]): number {
  // sort the array
  let sorted = statues.sort((a, b) => a - b);
  let min = sorted[0];
  let max = sorted[sorted.length - 1];

  let count = 0;
  for (let i = min; i < max; i++) {
    if (!statues.includes(i)) {
      count += 1;
    }
  }

  return count;
}

export { makeArrayConsecutive2 };
