const fn = (arr: number[]): number => {
  const map = arr.reduce((obj: Record<string, number>, val) => {
    if (!obj[val]) {
      obj[val] = 1
    } else {
      obj[val] += 1
    }
    return obj
  }, {})

  const frequentNumberInTheMap = Object.keys(map).reduce((acc, val) =>
    map[acc] > map[val] ? acc : val,
  )

  let tracker = 0
  // for (let i = 0; i < arr.length; i++) {
  //   if (Number(frequentNumberInTheMap) !== arr[i]) tracker++
  // }

  for (let [index, val] of arr.entries()) {
    if (Number(frequentNumberInTheMap) !== val) tracker++
  }

  return tracker
}

let arr = [1, 2, 3, 1, 2, 3, 3, 3]
// let arr = [3, 3, 2, 1, 3]
// let arr = [3, 3, 2, 1, 2, 2]

const printFn = fn(arr)
console.log(printFn)
