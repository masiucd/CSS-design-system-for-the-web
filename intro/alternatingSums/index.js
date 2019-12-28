/**
 *
 * @param {number[]} arr
 * @returns {number}
 */
const calculateTotalWeight = arr => arr.reduce((a, b) => a + b, 0);
/**
 *
 * @param {number[]} a
 * @returns {number[]}
 */
function alternatingSums(a) {
  const team1 = [];
  const team2 = [];
  for (let i = 1; i < a.length; i += 2) {
    team2.push(a[i]);
  }
  for (let i = 0; i < a.length; i += 2) {
    team1.push(a[i]);
  }

  const team1Res = calculateTotalWeight(team1);
  const team2Res = calculateTotalWeight(team2);
  return [team1Res, team2Res];
}

const a = [50, 60, 60, 45, 70];
console.log(alternatingSums(a));
