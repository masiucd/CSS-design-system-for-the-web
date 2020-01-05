/**
 *
 * @param {string} name
 * @returns {boolean}
 */
function variableName(name) {
  // if (name.trim() === 'variable') return false;
  // const nameArr = name.split('');
  // const re = /[^[]0-9-]/gi;
  // if (
  //   nameArr[0] === '0' ||
  //   nameArr[0] === '1' ||
  //   nameArr[0] === '2' ||
  //   nameArr[0] === '3' ||
  //   nameArr[0] === '4' ||
  //   nameArr[0] === '5' ||
  //   nameArr[0] === '6' ||
  //   nameArr[0] === '7' ||
  //   nameArr[0] === '8' ||
  //   nameArr[0] === '9' ||
  //   name.match(!re)
  // ) {
  //   return false;
  // }

  // for (const x of nameArr) {
  //   if (x.includes('-')) return false;
  // }
  // return true;

  return /^[a-z_]\w*$/i.test(name);

  // return reg;
}

const name1 = 'var_1__Int';
const name2 = 'qq-q';
const name3 = '2w2';
const name4 = 'a a_2';

console.log(variableName(name1)); // true
console.log(variableName(name2)); // false
console.log(variableName(name3)); // false
console.log(variableName(name4)); // false
