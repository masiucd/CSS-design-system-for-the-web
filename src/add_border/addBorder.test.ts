import { addBorder, addBorder2 } from ".";

let mocked1 = jest.fn(addBorder);
let mocked2 = jest.fn(addBorder2);

describe("addBorder", () => {
  let xs = ["abc", "ded"];
  test("addBorder1", () => {
    expect(addBorder).toBeDefined();
    mocked1(xs);
    expect(mocked1).toHaveBeenCalledWith(xs);
  });
  test("addBorder2", () => {
    expect(addBorder2).toBeDefined();
    mocked2(xs);
    expect(mocked2).toHaveBeenCalledWith(xs);
  });
});
