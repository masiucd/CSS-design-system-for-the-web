/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
/**
 *
 * @param {string} inputString
 * @returns {string}
 */
function insertDashes(inputString) {
  if (inputString.length === 1) return inputString;
  // const res = inputString
  //   .split('')
  //   .map(x => (x !== ' ' ? (x += '-') : ' '))
  //   .join('');

  // const x = res.split(' ');
  // const first = x[0];
  // const last = x[x.length - 1];

  // return `${first.slice(0, first.length - 1)} ${last.slice(
  //   0,
  //   last.length - 1
  // )}`;

  // console.log(res);
}

console.log(insertDashes('aba caba')); // "a-b-a c-a-b-a"
// console.log(insertDashes('aba caba sadsa sdasdasda sdasdas'));
