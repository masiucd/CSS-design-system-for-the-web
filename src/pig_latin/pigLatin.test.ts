import * as pigLatin from "./";

const fn1 = (str: string) => pigLatin.translatePigLatin(str);

jest.mock("./");

describe("pigLatin", () => {
  test("calls pigLatin with glove", () => {
    expect(pigLatin.translatePigLatin).toHaveBeenCalledTimes(0);
    fn1("glove");
    expect(pigLatin.translatePigLatin).toHaveBeenCalledWith("glove");
    expect(pigLatin.translatePigLatin).toHaveBeenCalled();
    expect(pigLatin.translatePigLatin).toHaveBeenCalledTimes(1);
  });
});
