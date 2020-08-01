import { sortByHeight } from ".";

let mocked = jest.fn(sortByHeight);
describe("sortByHeight", () => {
  test("fn", () => {
    expect(typeof sortByHeight).toBe("function");
    expect(mocked).toHaveBeenCalledTimes(0);
    mocked([-1, 2, 1, 3, 11, 2, -1, -2]);
    mocked([-1, 2, 1, 3, 11, 2, -1, -2]);
    expect(mocked).not.toHaveBeenCalledTimes(0);
    expect(mocked).toHaveBeenCalledTimes(2);
  });
});
