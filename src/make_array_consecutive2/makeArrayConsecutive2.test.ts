import { makeArrayConsecutive2 } from "./";

let mockedMakeArrayConsecutive2 = makeArrayConsecutive2;
mockedMakeArrayConsecutive2 = jest.fn();

describe("makeArrayConsecutive2", () => {
  test("fn", () => {
    let a = [0, 3]; //2
    let b = [6, 2, 3, 8]; //3
    let c = [1]; // 0

    expect(makeArrayConsecutive2(a)).toBe(2);
    expect(makeArrayConsecutive2(b)).toBe(3);
    expect(makeArrayConsecutive2(c)).toBe(0);
    expect(mockedMakeArrayConsecutive2).toHaveBeenCalledTimes(0);

    mockedMakeArrayConsecutive2(c);
    expect(mockedMakeArrayConsecutive2).toHaveBeenCalledTimes(1);
  });
});
