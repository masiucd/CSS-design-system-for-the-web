import * as fn from ".";

let myReplaceFn = fn.myReplace;

let mockedFn = jest.fn(myReplaceFn);

describe("myReplace", () => {
  test("should be defined", () => {
    expect(myReplaceFn).toBeDefined();
    expect(typeof myReplaceFn).toBe("function");
  });
  test("return right output", () => {
    let tst1 = myReplaceFn("I think we should look up there", "up", "Down");
    let tst2 = myReplaceFn("Let us go to the store", "store", "mall");
    let tst3 = myReplaceFn("This has a spellngi error", "spellngi", "spelling");

    expect(tst1).toBe("I think we should look down there");
    expect(tst2).toBe("Let us go to the mall");
    expect(tst3).toBe("This has a spelling error");

    expect(mockedFn).not.toHaveBeenCalledTimes(3);
    expect(mockedFn).toHaveBeenCalledTimes(0);

    mockedFn("baaz", "foo", "bar");

    expect(mockedFn).toHaveBeenCalledTimes(1);
  });
});
