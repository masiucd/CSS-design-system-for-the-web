interface LetterMap {
  [key: string]: number;
}

function commonCharacterCount(s1: string, s2: string) {
  let map: LetterMap = {};
  let count = 0;

  for (let val of s1) {
    if (map[val]) {
      map[val]++;
    } else {
      map[val] = 1;
    }
  }

  for (let val of s2) {
    if (map[val] && map[val] > 0) {
      map[val] -= 1;
      count++;
    }
  }
  return count;
}

export { commonCharacterCount };
