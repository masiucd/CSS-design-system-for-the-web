import { almostIncreasingSequence } from "./";

let mocked = almostIncreasingSequence;
mocked = jest.fn();

describe("almostIncreasingSequence", () => {
  test("fn", () => {
    let s1 = [1, 3, 2, 1];
    let s2 = [10, 1, 2, 3, 4, 5];
    let s3 = [1, 2, 1, 2];

    expect(almostIncreasingSequence(s1)).toBe(false);
    expect(almostIncreasingSequence(s2)).toBe(true);
    expect(almostIncreasingSequence(s3)).toBe(false);

    expect(mocked).toHaveBeenCalledTimes(0);
    mocked(s1);
    mocked(s2);
    mocked(s3);
    expect(mocked).toHaveBeenCalledTimes(3);
  });
});
