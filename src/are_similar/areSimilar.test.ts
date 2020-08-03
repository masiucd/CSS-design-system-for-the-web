import { areSimilar, areSimilar2 } from ".";

let fn1 = jest.fn(areSimilar);
let fn2 = jest.fn(areSimilar2);

describe("arrSimilar", () => {
  test("fn1", () => {
    expect(fn1).not.toHaveBeenCalled();
    fn1([1, 2, 3], [2, 1, 3]);
    expect(fn1).toHaveBeenCalled();
    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn1).toHaveBeenCalledWith([1, 2, 3], [2, 1, 3]);
    expect(areSimilar).toBeDefined();
    expect(areSimilar([1, 2, 3], [2, 1, 3])).toBe(true);
    expect(areSimilar([1, 2, 2], [2, 1, 1])).toBe(false);
  });
  test("fn2", () => {
    expect(fn2).not.toHaveBeenCalled();
    fn2([1, 2, 3], [2, 1, 3]);
    expect(fn2).toHaveBeenCalled();
    expect(fn2).toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledWith([1, 2, 3], [2, 1, 3]);
    expect(areSimilar2).toBeDefined();
    expect(areSimilar2([1, 2, 3], [2, 1, 3])).toBe(true);
    expect(areSimilar2([1, 2, 2], [2, 1, 1])).toBe(false);
  });
});
