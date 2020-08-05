# coding challenges λ🌟⚛️👨🏻‍💻

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Web apps](#web)
- [Tasks](#tasks)

## About <a name = "about"></a>

Coding challenges from different platforms like, Code signal, code wars, hacker rank, Leetcode. Solving Algorithms and data structure tasks.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

```bash
  git clone <Project url>

  cd into project

  yarn/npm install


```

Have Fun !

### Prerequisites

What things you need to install the software and how to install them.

```
  Node >= 8
```

### Some Algos λ👨🏻‍💻😎

```ts
function allLongestStrings(inputArray: string[]) {
  let xs = inputArray.map((val, index) => val.length);

  let max = Math.max(...xs);

  return inputArray.filter((val, index) => val.length === max);
}

function sortedSquaredArray(array: number[]): number[] {
  return array
    .map(String)
    .map((x) => x.replace(/-/g, ""))
    .map(Number)
    .sort((a, b) => a - b)
    .map((x) => x * x);
}
export { sortedSquaredArray };
```

## Web apps <a name = "web"></a>

- [codesignal](https://app.codesignal.com/)

- [hackerrank](https://www.hackerrank.com/)

- [leetcode](https://leetcode.com/)

- [codewars](https://www.codewars.com/)

### Coding Challenges includes <a name = "tasks" ></a>

- shapeArea 🏟
- palindrome 📭
- adjacentElementProduct λ
- makeArrayConsecutive2 🌟
- almostIncreasingSequence 📲
- sortedSquaredArray 🧙🏻‍♂️
- allLongestStrings 🤥
- commonCharacterCount 🚙
- isLucky ✌🏼
- reverseInParentheses ◀️
- alternatingSums ∑
- addBorder  🐫
- arrSimilar  👯‍♂️
- arrayChange  🎗
- fearNoLetter  😰
- convertHtml  ꄭ
- spinalCase  ꄭ
