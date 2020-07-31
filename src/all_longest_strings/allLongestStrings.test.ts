import { allLongestStrings } from ".";

let mocked = jest.fn(allLongestStrings);

describe("allLongestStrings", () => {
  let a = ["aba", "aa", "ad", "vcd", "aba"];
  let b = ["abc", "eeee", "abcd", "dcd"];
  test("fn", () => {
    expect(allLongestStrings(a).length).toBe(3);
    expect(allLongestStrings(b).length).toBe(2);
  });

  test("mocked", () => {
    mocked(a);
    mocked(b);
    expect(mocked).toHaveBeenCalledTimes(2);
    expect(allLongestStrings(a)).toStrictEqual(["aba", "vcd", "aba"]);
  });
});
