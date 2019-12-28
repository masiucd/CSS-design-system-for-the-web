/**
 *
 * @param {string} str
 * @returns {string}
 */
const reverseRec = str => {
  const regex = /\(([^()]*)\)/i;
  let subStr = regex.exec(str)[1];
  subStr = subStr
    .split('')
    .reverse()
    .join('');

  return str.replace(regex, subStr);
};

// console.log(reverseRec('foo(bar)baz'));
/**
 *
 * @param {string} s
 * @returns {string}
 */
function reverseInParentheses(s) {
  if (s.includes('(')) {
    return reverseInParentheses(reverseRec(s));
  }
  return s;
}

// console.log(reverseInParentheses('(bar)')); // rab
// console.log(reverseInParentheses('foo(bar)baz')); // foorabbaz

/**
 *
 * @param {string} s
 * @returns {string}
 */
function reverseInParentheses2(s) {
  const regex = /\(([^()]*)\)/i;
  const x = s.match(regex)[1];

  const reversedStr = x
    .split('')
    .reverse()
    .join('');

  return s.replace(regex, reversedStr);
}

// console.log(reverseInParentheses('(bar)')); // rab
console.log(reverseInParentheses2('foo(bar)baz')); // foorabbaz
