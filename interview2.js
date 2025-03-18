const myFlatten = (arr, n, currentDepth) => {
  if (currentDepth >= n) {
    return arr
  }
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      // console.log('going', arr[i])
      res.push(...myFlatten(arr[i], n, currentDepth + 1))
    } else {
      // console.log('normal number', arr[i])
      res.push(arr[i])
    }
  }
  return res
}

const testarr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

let N = 0
console.log(myFlatten(testarr, N, 0))
N = 1
console.log(myFlatten(testarr, N, 0))
N = 2
console.log(myFlatten(testarr, N, 0))

// isArray and
// arr[i] instanceof Array
