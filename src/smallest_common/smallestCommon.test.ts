import * as smallestCommon from ".";

const mocked = smallestCommon.smallestCommon as jest.Mock<number>;

let fn1 = (arr: number[]) => smallestCommon.smallestCommon(arr);

fn1 = jest.fn();

describe("smallestCommon", () => {
  test("be defined and called", () => {
    expect(mocked).toBeDefined();

    fn1([1, 5]);
    expect(fn1).toHaveBeenCalled();

    fn1([3, 4]);
    fn1([2, 4]);

    expect(fn1).toHaveBeenCalledTimes(3);
  });

  test("return correct LCM", () => {
    expect(mocked([3, 4])).toBe(12);
    expect(mocked([1, 5])).toBe(60);
  });
});
