import { commonCharacterCount } from ".";

let mocked = jest.fn(commonCharacterCount);

describe("commonCharacterCount", () => {
  test("fn", () => {
    expect(mocked).toHaveBeenCalledTimes(0);
    mocked("aabcc", "adcaa");
    mocked("zzzz", "zzzzzzzzzz");
    expect(mocked).toHaveBeenCalledTimes(2);

    expect(mocked("zzzz", "zzzzzzzzzz")).toBe(4);
    expect(mocked("aabcc", "adcaa")).toBe(3);

    expect(typeof commonCharacterCount).toBe("function");
  });
});
