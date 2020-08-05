function palindromeRearranging(str: string) {
  if (str.length === 1) return true;

  let map: { [key: string]: number } = {};

  for (let char of str) {
    if (map[char]) {
      map[char] += 1;
    } else {
      map[char] = 1;
    }
  }

  return Object.values(map).filter((num) => num % 2 === 1).length < 2;
}

let x = "aabb";
x = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc";
x = "abca";
x = "abbcabb";
x = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa";
x = "zaa";
export { palindromeRearranging };
