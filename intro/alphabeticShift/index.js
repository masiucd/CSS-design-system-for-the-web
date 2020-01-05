/* eslint-disable prefer-const */
/**
 *
 * @param {string} inputString
 * @returns {string}
 */
function alphabeticShift(inputString) {
  // let strOut = '';
  // for (let i = 0; i < inputString.length; i += 1) {
  //   if (inputString.charCodeAt(i) > 96 && inputString.charCodeAt(i) < 123) {
  //     strOut += String.fromCharCode(inputString.charCodeAt(i) + 1);
  //   }
  // }
  // return strOut;

  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let strArr = inputString.split('');

  for (let i = 0; i < strArr.length; i++) {
    let indexValue = 0;
    if (strArr[i] !== 'z') {
      indexValue = alphabet.indexOf(strArr[i]) + 1;
    }
    strArr[i] = alphabet[indexValue];
    // console.log((inputString[i] = alphabet[indexValue]));
  }
  return strArr.join('');
}

console.log(alphabeticShift('crazy'));
// dsbaz
