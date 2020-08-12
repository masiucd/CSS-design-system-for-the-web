import * as primes from ".";

describe("sumPrimes", () => {
  test("isPrime ", () => {
    expect(primes.isPrime).toBeDefined();
    expect(primes.isPrime(3)).toBeTruthy();
    expect(primes.isPrime(4)).toBeFalsy();
  });
});
