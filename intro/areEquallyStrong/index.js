/**
 *
 * @param {number} yourLeft
 * @param {number} yourRight
 * @param {number} friendsLeft
 * @param {number} friendsRight
 * @returns {boolean}
 */
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  const yourStrongest = Math.max(yourLeft, yourRight);
  const friendsStrongest = Math.max(friendsLeft, friendsRight);
  const friendsWeakest = Math.min(friendsLeft, friendsRight);
  const yourWeakest = Math.min(yourLeft, yourRight);

  return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest;
}

function areEquallyStrong2(yourLeft, yourRight, friendsLeft, friendsRight) {
  const me = [yourLeft, yourRight].sort().join('');
  const friend = [friendsLeft, friendsRight].sort().join('');

  return me === friend;
}
