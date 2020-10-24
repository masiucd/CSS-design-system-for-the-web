import * as fn from "./index"

jest.spyOn(fn, "fn")

describe("equalize the array function", () => {
  test("inputs should be a array", () => {
    let arr1 = [1, 2, 3, 1, 2, 3, 3, 3]
    let arr2 = [3, 3, 2, 1, 3]
    let arr3 = [3, 3, 2, 1, 2, 2]

    expect(Array.isArray(arr1)).toBe(true)
    expect(Array.isArray(arr2)).toBe(true)
    expect(Array.isArray(arr3)).toBe(true)
  })
  test("should return the expected result", () => {
    let arr1 = [1, 2, 3, 1, 2, 3, 3, 3]
    let arr2 = [3, 3, 2, 1, 3]
    let arr3 = [3, 3, 2, 1, 2, 2]

    expect(fn.fn(arr1)).toBe(4)
    expect(fn.fn(arr2)).toBe(2)
    expect(fn.fn(arr3)).toBe(3)
  })

  test("fn has been called 3 times", () => {
    expect(fn.fn).toHaveBeenCalledTimes(3)
  })
})
