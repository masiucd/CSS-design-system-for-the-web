/**
 *
 * @param {number} experience
 * @param {number} threshold
 * @param {number} reward
 * @returns {boolean}
 */
function reachNextLevel(experience, threshold, reward) {
  const firstMove = experience - threshold + reward;

  return !(firstMove < 0);
}

console.log(reachNextLevel(10, 15, 5));
// true
