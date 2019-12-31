// /**
//  *
//  * @param {string} inputString
//  * @returns {boolean}
//  */
// function isIPv4Address(inputString) {
//   if (inputString.length <= 7) return false;
//   const arr = inputString.split('.');
//   const [a, b, c, d] = arr;
//   if (a.length === 3 && b.length === 2 && c.length === 3 && d.length === 1)
//     return true;
//   return false;
// }

/**
 *
 * @param {string} inputString
 * @returns {boolean}
 */
function isIPv4Address(inputString) {
  const reg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  if (inputString.match(reg)) {
    return true;
  }
  return false;
}
console.log(isIPv4Address('172.16.254.1'));
console.log(isIPv4Address('0.254.255.0')); // true
