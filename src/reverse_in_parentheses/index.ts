function fn(str: string) {
  let regex = /\(([^()]*)\)/i;
  let subStr: string = regex.exec(str)![1];
  subStr = subStr.split("").reverse().join("");
  return str.replace(regex, subStr);
}

function reverseInParentheses(inputString: string): string {
  if (inputString.includes("(")) {
    return reverseInParentheses(fn(inputString));
  }
  return inputString;
}

function reverseInParentheses2(inputString: string): string {
  let str = inputString;
  let regex = /\(([^()]*)\)/i;
  while (str.includes("(")) {
    str = str.replace(regex, (_, str) => [...str].reverse().join(""));
  }
  return str;
}

export { reverseInParentheses, reverseInParentheses2 };
console.log(reverseInParentheses2("foo(bar)baz"));
// console.log(reverseInParentheses("foo(barbaz"));
// console.log(reverseInParentheses("foo(bar)baz(blim)"));
