/* eslint-disable prefer-const */
function circleOfNumbers(n: number, firstNumber: number): number {
  const nums = [];
  let halfWay = n / 2;
  for (let i = 0; i < n; i += 1) {
    nums.push(i);
  }

  // if it is on the first half of the circle
  if (firstNumber < halfWay) {
    return nums[firstNumber + halfWay];
  }

  return nums[firstNumber - halfWay];
}

console.log(circleOfNumbers(10, 2)); // 7
console.log(circleOfNumbers(10, 7)); // 2
// console.log(circleOfNumbers(4, 1)); // 3
