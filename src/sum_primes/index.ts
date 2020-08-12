function isPrime(n: number) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return n !== 1 && n !== 0;
}

function sumPrimes(n: number) {
  let i = 1;
  let res = 0;
  while (i < n) {
    if (isPrime(i)) {
      res += i;
    }
    i++;
  }
  return res;
}
function sumPrimes2(n: number) {
  return [...Array(1 + n).keys()]
    .filter((n) => n > 1)
    .map((n) => (isPrime(n) ? n : 0))
    .filter((x) => x > 0)
    .reduce((a, b) => a + b, 0);
}

// console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(4));
// console.log(isPrime(5));
// console.log(sumPrimes2(10));

export { isPrime, sumPrimes2, sumPrimes };
