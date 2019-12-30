/**
 *
 * @param {number} yourLeft
 * @param {number} yourRight
 * @param {number} friendsLeft
 * @param {number} friendsRight
 * @returns {boolean}
 */
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  const yourStronges = Math.max(yourLeft, yourRight);
  const friendsStrongest = Math.max(friendsLeft, friendsRight);
  const friendsWeakest = Math.min(friendsLeft, friendsRight);
  const yourWeakest = Math.min(yourLeft, yourRight);

  return yourStronges === friendsStrongest && yourWeakest === friendsWeakest;
}

console.log(areEquallyStrong(0, 10, 10, 0)); // true
