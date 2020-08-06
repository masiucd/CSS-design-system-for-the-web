export function translatePigLatin(str: string): string {
  let consonantRe = /^[^aeiou]+/;
  let vowelRe = /[aeiou]/gi;
  let word = "";

  let cluster = str.match(consonantRe) ? str.match(consonantRe)![0] : "";

  if (!str[0].match(consonantRe)) {
    word = str += "way";
  } else if (cluster) {
    word = str.slice(cluster.length) + str.slice(0, cluster.length) + "ay";
  }

  return word;
}

// console.log(translatePigLatin("consonant"));
// console.log(translatePigLatin("apa"));
console.log(translatePigLatin("glove"));
