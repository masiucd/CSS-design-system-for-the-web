/**
 *
 * @param {number} score1
 * @param {number} score2
 * @returns {boolean}
 */
function tennisSet(score1, score2) {
  // if (score1 >= 5 && score2 >= 5) return false;
  // if (score1 < 5 && score2 > 5) return true;
  // if (score1 > 5 && score2 < 5) return true;
  // if (score1 >= 5 && score2 >= 5) return false;
  if (score1 < 0 || score1 > 7 || score2 < 0 || score2 > 7 || score1 === score2)
    return false;
  if (score1 === 6 && score2 < 5) return true;
  if (score2 === 6 && score1 < 5) return true;
  if (score1 === 7 && score2 > 4) return true;
  if (score2 === 7 && score1 > 5) return true;
  return false;
  // return score1 >= 5 && score2 < 5 || score2 >=5 && score1 < 5 ;
}

function tennisSet2(score1, score2) {
  const max = Math.max(score1, score2);
  const min = Math.min(score1, score2);
  return (max === 6 && min < 5) || (max === 7 && min >= 5 && min <= 6);
}

console.log(tennisSet(3, 6)); // true
console.log(tennisSet(8, 5)); // false
console.log(tennisSet(6, 5)); // false
console.log(tennisSet(6, 4)); // true
