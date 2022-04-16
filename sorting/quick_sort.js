const pivotHelper = (arr, start_index=0, end_index=arr.length+1) => {
  let swapIdx = start_index
  let pivot = arr[start_index]

  for (let i=start_index + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]]
    }
  }
  [arr[swapIdx], arr[start_index]] = [arr[start_index], arr[swapIdx]]
  return swapIdx
}


const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right)
    // left side
    quickSort(arr, left, pivotIndex - 1)
    // right side
    quickSort(arr, pivotIndex+1, right)
  }
  return arr
}

const arr = [28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]
// console.log(pivotHelper(arr, 0, 11))
console.log(quickSort(arr))
// console.log(arr)
