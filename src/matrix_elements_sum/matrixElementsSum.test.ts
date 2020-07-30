import { matrixElementsSum } from "./";
describe("MatrixElementSum", () => {
  let xs = [
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ];

  test("fn", () => {
    expect(typeof matrixElementsSum).toBe("function");
    expect(matrixElementsSum).toBeDefined();
    expect(matrixElementsSum(xs)).toBe(9);
    expect(matrixElementsSum([[1], [5], [0], [2]])).toBe(6);
  });
});
