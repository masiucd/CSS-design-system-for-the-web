/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
function main(arr: string[]): string {
  let map = {};
  let max = 0;
  let mostRepeatedName;

  for (let name of arr) {
    map[name] ? (map[name] += 1) : (map[name] = 1);
  }

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    // console.log(map[element]);
    if (max < map[element]) {
      max = map[element];
      mostRepeatedName = element;
    }
  }

  return mostRepeatedName;
}

console.log(main(['ale', 'bale', 'ida', 'mia', 'bale', 'ale', 'mia', 'ale']));
