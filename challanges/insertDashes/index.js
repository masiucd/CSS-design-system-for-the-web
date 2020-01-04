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

  // let i = 0;
  // let j = inputString.length - 1;
  // let res = '';
  // // console.log(inputString[i]);
  // while (i <= j) {
  //   if (inputString[i] !== ' ' || inputString[j] !== ' ') {
  //     res += `${inputString[i]}-`;
  //     if (inputString[i] === ' ') {
  //       res += `${inputString[i]} `;
  //     }
  //   }
  //   i++;
  // }

  // return res.split(' ');

  // return res.slice(0, res.length - 1);

  const reg = /^[A-Za-z]+$/;
  let letters = [];
  let spaceIndex = [];
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i].match(reg)) {
      letters.push(inputString[i]);
    }
    if (inputString[i] === ' ') {
      spaceIndex.push(i);
    }
  }

  // let alpha = reg.test(x);
  const letterWithDashes = letters.map(x => `${x}-`);
  console.log(letterWithDashes);
  // console.log(spaceIndex);
}

console.log(insertDashes('aba caba')); // "a-b-a c-a-b-a"
// console.log(insertDashes('aba caba sadsa sdasdasda sdasdas'));
