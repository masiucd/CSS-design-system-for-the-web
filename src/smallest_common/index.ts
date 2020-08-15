const smallestCommon = (arr: number[]): number => {
  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };
  const lcd = (a: number, b: number) => (a * b) / gcd(a, b);

  let [min, max] = arr.sort((a, b) => a - b);

  let currentLcm = min;

  while (min < max) {
    currentLcm = lcd(currentLcm, ++min);
  }

  return currentLcm;
};
export { smallestCommon };
// console.log(smallestCommon([3, 4])); // 12
