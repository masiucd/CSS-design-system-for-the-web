/**
 *
 * @param {number} n
 * @param {number} firstNumber
 * @returns {number}
 */
function circleOfNumbers(n, firstNumber) {
  const hafWay = n / 2;
  const nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(i);
  }

  if (firstNumber < hafWay) {
    return nums[firstNumber + hafWay];
  }
  if (firstNumber >= hafWay) {
    return nums[firstNumber - hafWay];
  }
}

function circleOfNumbers2(n, firstNumber) {
  return (firstNumber + n / 2) % n;
}

console.log(circleOfNumbers2(10, 2)); // 7
// console.log(circleOfNumbers2(6, 3)); // 0
console.log(circleOfNumbers2(10, 7)); // 2
