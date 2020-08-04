import { fearNotLetter } from ".";

let fn = fearNotLetter;
fn = jest.fn();

describe("fearNoLetter", () => {
  test("fn1", () => {
    expect(fn).not.toHaveBeenCalled();
    fn("");
    expect(fn).toHaveBeenCalled();
    fn("asda");
    expect(fn).not.toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fearNotLetter("abce")).toBe("d");
    expect(fearNotLetter("lswsa")).toBe("m");
    expect(fearNotLetter).toBeDefined();
    expect(typeof fearNotLetter).toBe("function");
  });
});
