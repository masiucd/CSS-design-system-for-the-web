import { checkPalindrome } from "./";

describe("checkPalindrome", () => {
  test("fn", () => {
    expect(checkPalindrome("apa")).toBe(true);
    expect(checkPalindrome("apaa")).toBe(false);
    expect(typeof checkPalindrome).toBe("function");
  });
});
