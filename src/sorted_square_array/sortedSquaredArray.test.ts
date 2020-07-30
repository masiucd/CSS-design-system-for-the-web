import { sortedSquaredArray } from "./";

let mocked = sortedSquaredArray;
mocked = jest.fn();

describe("sortedSquareArray", () => {
  let xs = [-6, -4, 1, 2, 3, 5];
  let xs2 = [-10, 1, 9, 9, 10];
  test("fn", () => {
    expect(sortedSquaredArray(xs)).toStrictEqual([1, 4, 9, 16, 25, 36]);
    expect(sortedSquaredArray([1])).toStrictEqual([1]);
    expect(sortedSquaredArray(xs2)).toStrictEqual([1, 81, 81, 100, 100]);
  });

  test("mocked version", () => {
    expect(mocked).toHaveBeenCalledTimes(0);
    mocked(xs);
    mocked(xs2);
    expect(mocked).toHaveBeenCalledTimes(2);
  });
});
