/**
 *
 * @param {number} value1
 * @param {number} weight1
 * @param {number} value2
 * @param {number} weight2
 * @param {number} maxW
 * @returns {number}
 */
function knapsackLight(value1, weight1, value2, weight2, maxW) {
  if (maxW < weight1 && maxW < weight2) return 0;
  const totalWeight = weight1 + weight2;
  if (totalWeight === maxW || maxW > totalWeight) {
    return value1 + value2;
  }
  if ((totalWeight > maxW && weight1 < maxW) || weight2 < maxW) {
    return Math.max(value1, value2);
  }
  if (maxW < totalWeight && maxW >= weight1) {
    return value1;
  }
  if (maxW < totalWeight && maxW >= weight2) {
    return value2;
  }
}

console.log(knapsackLight(10, 5, 6, 4, 8));
// value1 = 10
// and it weighs 5 kg
// value2 = 6
// and it weighs 4 kg
// and you can only cary home 8kg
console.log(knapsackLight(10, 5, 6, 4, 9));
console.log(knapsackLight(15, 2, 20, 3, 2));

// value1: 15
// weight1: 2
// value2: 20
// weight2: 3
// maxW: 2

function knapsackLight2(value1, weight1, value2, weight2, maxW) {
  return Math.max(
    maxW >= weight1 && value1,
    maxW >= weight2 && value2,
    maxW >= weight1 + weight2 && value1 + value2
  );
}
