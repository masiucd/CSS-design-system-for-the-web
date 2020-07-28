import { shapeArea } from "./";

let mocked = jest.fn(shapeArea);

describe("shapeArea", () => {
  test("fn", () => {
    expect(shapeArea(1)).toBe(1);
    expect(shapeArea(2)).toBe(5);
    expect(shapeArea(3)).toBe(13);
    expect(shapeArea(4)).toBe(25);
  });

  test("fn mocked ", () => {
    expect(mocked(1)).toBe(1);
    expect(mocked).toHaveBeenCalled();
    expect(mocked).toHaveBeenCalledWith(1);
  });
});
