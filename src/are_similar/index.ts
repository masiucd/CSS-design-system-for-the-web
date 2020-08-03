const compareArrays = <T>(arr1: T[], arr2: T[]): boolean => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

function areSimilar(a: number[], b: number[]): boolean {
  if (compareArrays(a, b)) return true;

  let aList = [];
  let bList = [];

  for (let i = 0; i < a.length; i++) {
    const elementOne = a[i];
    const elementTwo = b[i];

    // console.log(a.indexOf(i), b.indexOf(i));
    if (elementOne !== elementTwo) {
      aList.push(elementOne);
      bList.push(elementTwo);
    }
  }

  return compareArrays(aList, bList.reverse());
}

function areSimilar2(a: number[], b: number[]): boolean {
  if (compareArrays(a, b)) return true;

  let xs1 = a.filter((n, i) => n !== b[i]);
  let xs2 = b.filter((n, i) => n !== a[i]);

  return compareArrays(xs1, xs2.reverse());
}

export { areSimilar, areSimilar2 };
