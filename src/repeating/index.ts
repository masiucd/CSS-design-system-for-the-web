interface CharMap {
  [key: string]: number;
}
function foo(s1: string, s2: string) {
  let map: CharMap = {};
  let count = 0;
  for (let char of s1) {
    if (map[char]) {
      map[char] += 1;
    } else {
      map[char] = 1;
    }
  }

  for (let letter of s2) {
    if (map[letter] && map[letter] > 0) {
      console.log("letter ", map[letter]);
      map[letter] -= 1;
      count++;
    }
  }
  return count;
}

console.log(foo("anna", "panna"));
// console.log(foo("abc", "efgc"));
