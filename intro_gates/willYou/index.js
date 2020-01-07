/**
 *
 * @param {boolean} young
 * @param {boolean} beautiful
 * @param {boolean} loved
 * @returns {boolean}
 */
function willYoux(young, beautiful, loved) {
  // if (young && beautiful && loved) return false;
  if (!young && beautiful && loved) return true;
  if (young && !beautiful && loved) return true;
  if (young && beautiful && !loved) return true;
  if (!young && !beautiful && loved) return true;
  return false;
}

function willYou(young, beautiful, loved) {
  return (young && beautiful) !== loved;
}

console.log(willYou(true, true, true)); // false
console.log(willYou(true, false, true)); // true
console.log(willYou(false, false, true)); // true

// they are young and beautiful but not loved;
// they are loved but not young or not beautiful.
