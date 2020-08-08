function myReplace(str: string, before: string, after: string) {
  //   First argument is the sentence to perform the search and replace on.

  // Second argument is the word that you will be replacing (before).

  // Third argument is what you will be replacing the second argument with (after).

  const firstCharUpper = (str: string) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  };

  let firstLetterOfBefore = str
    .split(" ")
    .filter((x) => x === before)
    .join("")[0];

  if (firstLetterOfBefore === before[0].toUpperCase()) {
    after = firstCharUpper(after);
  } else if (firstLetterOfBefore !== before[0].toUpperCase()) {
    after = after.toLowerCase();
  }

  return str.replace(before, after);

  // return str;
}

// let foo = myReplace(
//   "A quick brown fox jumped over the lazy dog",
//   "jumped",
//   "leaped",
// );

let foo = myReplace("I think we should look up there", "up", "Down");

console.log(foo);

export { myReplace };
