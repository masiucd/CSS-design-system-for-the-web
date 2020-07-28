import { adjacentElementsProduct } from "./";
describe("adjacentElementProduct", () => {
  test("should match", () => {
    let arr1 = [3, 6, -2, -5, 7, 3];
    let arr2 = [-1, -2];

    expect(typeof adjacentElementsProduct).toBe("function");
    expect(adjacentElementsProduct(arr1)).toBe(21);
    expect(adjacentElementsProduct(arr2)).toBe(2);
  });
  test("should not match", () => {
    let arr1 = [3, 6, -2, -5, 7, 3];
    let arr2 = [-1, -2];

    expect(adjacentElementsProduct(arr1)).not.toBe(22);
    expect(adjacentElementsProduct(arr2)).not.toBe(7);
  });
});
