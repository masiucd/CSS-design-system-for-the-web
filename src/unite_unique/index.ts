function uniteUnique<T>(...arr: Array<T>): T[] {
  let xs: any[] = [...arr];

  let flatten = xs.reduce((item, val) => item.concat(val), []);

  return flatten.filter((val: number, i: number) => flatten.indexOf(val) === i);
}

let x = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
