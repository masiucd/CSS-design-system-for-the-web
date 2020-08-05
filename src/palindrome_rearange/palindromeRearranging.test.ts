import { palindromeRearranging } from ".";

let fn = palindromeRearranging;
fn = jest.fn();

describe("palindromeRearranging", () => {
  test("fn", () => {
    expect(fn).toHaveBeenCalledTimes(0);
    fn("asa");
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith("asa");
    expect(palindromeRearranging("aabb")).toBe(true);
    expect(palindromeRearranging("abca")).not.toBe(true);
    expect(palindromeRearranging("abca")).toBe(false);
  });
});
