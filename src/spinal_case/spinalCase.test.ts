import { spinalCase } from ".";

describe("spinalCase", () => {
  test("fn", () => {
    expect(typeof spinalCase).toBe("function");
    expect(spinalCase).toBeDefined();
    expect(spinalCase("This Is Spinal Tap")).toBe("this-is-spinal-tap");
    expect(spinalCase("The_Andy_Griffith_Show")).toBe("the-andy-griffith-show");
  });
});
