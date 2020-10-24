export const fn = (arr: number[]): number => {
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

  for (let [index, val] of arr.entries()) {
    if (Number(frequentNumberInTheMap) !== val) tracker++
  }

  return tracker
}
