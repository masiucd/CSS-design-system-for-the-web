import * as av from ".";

const mockedOne = av.avoidObstacles as jest.Mock<number>;
const mockedTwo = av.avoidObstacles2 as jest.Mock<number>;

let fn1 = (xs: number[]) => av.avoidObstacles(xs);
let fn2 = (xs: number[]) => av.avoidObstacles2(xs);

fn1 = jest.fn();
fn2 = jest.fn();

describe("avoidObstacles", () => {
  test("been called times", () => {
    fn1([1, 4, 10, 6, 2]);

    fn2([1, 4, 10, 6, 2]);

    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn1).toHaveBeenCalledWith([1, 4, 10, 6, 2]);

    expect(fn2).toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledWith([1, 4, 10, 6, 2]);

    fn2([5, 8]);
    expect(fn2).not.toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledTimes(2);
  });

  test("correct", () => {
    expect(mockedOne([5, 3, 6, 7, 9])).toBe(4);
    expect(mockedTwo([5, 3, 6, 7, 9])).toBe(4);

    expect(mockedOne([19, 32, 11, 23])).toBe(3);
    expect(mockedTwo([19, 32, 11, 23])).toBe(3);

    expect(mockedTwo([19, 32, 11, 23])).not.toBe(4);
  });
});
