import { reverseInParentheses, reverseInParentheses2 } from ".";

describe("reverseInParentheses", () => {
  test("reverseInParentheses1", () => {
    expect(reverseInParentheses).not.toBeNull();
    expect(reverseInParentheses).toBeDefined();
    expect(reverseInParentheses("(bar)")).toBe("rab");
    expect(reverseInParentheses("(abc)d(efg)")).toBe("cbadgfe");
  });
  test("reverseInParentheses2", () => {
    expect(reverseInParentheses2).not.toBeNull();
    expect(reverseInParentheses2).toBeDefined();
    expect(reverseInParentheses2("(bar)")).toBe("rab");
    expect(reverseInParentheses2("(abc)d(efg)")).toBe("cbadgfe");
  });
});
