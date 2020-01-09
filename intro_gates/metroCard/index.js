/**
 *
 * @param {number} lastNumberOfDays
 * @returns {number[]}
 */
function metroCard(lastNumberOfDays) {
  return {
    28: [31],
    30: [31],
    31: [28, 30, 31],
  }[lastNumberOfDays];
}

console.log(metroCard(30)); // 31
console.log(metroCard(31)); // [28,30,31]
