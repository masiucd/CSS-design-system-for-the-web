/* eslint-disable prefer-const */
function circleOfNumbers(n, firstNumber) {
    var nums = [];
    var halfWay = n / 2;
    for (var i = 0; i < n; i += 1) {
        nums.push(i);
    }
    // if it is on the first half of the circle
    if (firstNumber < halfWay) {
        return nums[firstNumber + halfWay];
    }
    if (firstNumber > halfWay) {
        return nums[firstNumber - halfWay];
    }
}
console.log(circleOfNumbers(10, 2)); // 7
console.log(circleOfNumbers(10, 7)); // 2
// console.log(circleOfNumbers(4, 1)); // 3
