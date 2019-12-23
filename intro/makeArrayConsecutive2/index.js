/* eslint-disable prefer-const */
/**
 *
 * @param {number[]} statues
 * @returns {number}
 */
function makeArrayConsecutive2(statues) {
  const statuesArray = statues.sort((a, b) => a - b);
  let min = statuesArray[0];
  let max = statuesArray[statuesArray.length - 1];
  let counter = 0;

  while (min < max) {
    console.log('INDEX IS  :', statuesArray.indexOf(min));
    // when the the next ordered number don't exists we get a -1
    if (statuesArray.indexOf(min) === -1) {
      counter += 1;
    }
    min += 1;
  }
  return counter;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8])); // 3
// console.log(makeArrayConsecutive2([5, 4, 6])); // 0
