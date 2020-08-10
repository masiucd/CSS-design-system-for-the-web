function pairElement(str: string) {
  const pair = (input: string) => {
    switch (input) {
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
      default:
        return [];
    }
  };

  let res = [];
  for (let i = 0; i < str.length; i++) {
    res.push(pair(str[i]));
  }

  return res;
}

function pairElement2(str: string) {
  const pair = (input: string) => {
    switch (input) {
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
      default:
        return [];
    }
  };

  let res = str.split("").map((dna) => pair(dna));

  return res;
}

pairElement2("GCG");
