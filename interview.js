const quickSort = (arr) => {
  if (arr.length < 1) return arr
  let left = [], right = []
  const pivot = arr[0]
  arr.forEach((num, index) => {
    if (index === 0) return
    if (num > pivot) {
      right.push(num)
    } else {
      left.push(num)
    }
  })
  return [...quickSort(left), pivot, ...quickSort(right)]
}
const testArr = [3, 2, 1, 5, 6, 4]
console.log(quickSort(testArr)) // [1, 2, 3, 4, 5, 6]