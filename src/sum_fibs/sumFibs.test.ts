import * as fib from ".";

let fibSumFn = (n: number) => fib.sumFibs(n);

const mockedFib = fib.sumFibs as jest.Mock<number>;

fibSumFn = jest.fn();

let fnMocked = mockedFib;

describe("Sum fib", () => {
  test("fn to be defined", () => {
    expect(typeof fibSumFn).toBe("function");
    expect(fibSumFn).toBeDefined();
  });

  test("has been called", () => {
    fibSumFn(1);
    fibSumFn(2);
    fibSumFn(3);
    expect(fibSumFn).toHaveBeenCalledTimes(3);
    expect(fibSumFn).toHaveBeenCalledTimes(3);

    expect(fib.sumFibs(4)).toBe(5);
  });

  test("fn mocked", () => {
    fnMocked(2);
  });
});
