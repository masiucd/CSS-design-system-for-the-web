import { spinalCase } from ".";

describe("spinalCase", () => {
  test("fn", () => {
    expect(typeof spinalCase).toBe("function");
    expect(spinalCase).toBeDefined();
    let x = spinalCase("This Is Spinal Tap");
    expect(spinalCase("This Is Spinal Tap")).toBe("this-is-spinal-tap");
    expect(spinalCase("The_Andy_Griffith_Show")).toBe("the-andy-griffith-show");
    expect(typeof x).toBe("string");
  });
});
