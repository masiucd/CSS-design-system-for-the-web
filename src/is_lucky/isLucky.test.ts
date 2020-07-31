import { isLucky } from ".";

let mocked = jest.fn(isLucky);
describe("isLucky", () => {
  test("fn", () => {
    expect(typeof isLucky).toBe("function");
    expect(isLucky(1230)).toBe(true);
    expect(isLucky(239017)).toBe(false);
    expect(isLucky(239017)).not.toBe(true);
    expect(isLucky(10)).not.toBe(true);
    expect(isLucky(10)).toBe(false);
  });

  test("mocked", () => {
    mocked(12312);
    mocked(12312123);
    mocked(12);
    expect(mocked).toHaveBeenCalledTimes(3);
    expect(mocked(10)).toBe(false);
  });
});
