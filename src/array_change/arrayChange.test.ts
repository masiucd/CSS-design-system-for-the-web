import { arrayChange } from ".";

let mocked = jest.fn(arrayChange);
describe("arrayChange", () => {
  test("fn", () => {
    expect(mocked).not.toHaveBeenCalled();
    mocked([1, 1, 1]);
    expect(mocked).toHaveBeenCalled();
    expect(mocked).toHaveBeenCalledTimes(1);
    expect(arrayChange([1, 1, 1])).toBe(3);
    expect(arrayChange([2, 1, 10, 1])).toBe(12);

    expect(typeof arrayChange).toBe("function");
  });
});
