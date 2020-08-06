function uniteUnique(...arr) {
  // let xs = [...arr];

  // let flatten = xs.reduce((item, val) => item.concat(val), []);

  // return flatten.filter((val, i) => flatten.indexOf(val) === i);

  let flatten = [].concat(...arr);
  let unique = flatten.filter((val, index) => flatten.indexOf(val) === index);
  let unique2 = [...new Set(flatten)];
  return unique2;
}

let x = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
let x2 = uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
let x3 = uniteUnique([1, 2, 3], [5, 2, 1]);
console.log(x3);
