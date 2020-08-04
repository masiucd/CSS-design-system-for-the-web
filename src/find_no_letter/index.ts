function fearNotLetter(str: string) {
  let curr = str.charCodeAt(0); // char code of first letter
  let missing; // will be the missing letter

  str.split("").map((_, i) => {
    if (str.charCodeAt(i) === curr) {
      ++curr;
    } else {
      missing = String.fromCharCode(curr);
    }
  });

  return missing;
}
export { fearNotLetter };
