const swap = (arr, idx1, idx2) => {
  // const temp = arr[idx1]
  // arr[idx1] = arr[idx2]
  // arr[idx2] = temp
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

const bubbleSort = (arr) => {
  // loop through arr starting from the end as i
  for (let i = arr.length; i > 0; i--) {
    // loop through i-1 from zero as j
    for (let j = 0; j < i - 1; j++) {
      // compare j and j+1, swap if j is greater than j+1
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1)
      }
    }
  }   
  // return sorted arr
  return arr
}

// Optimized with no swaps condition
const bubbleSortRefactored = (arr) => {
  let noSwaps;
  // loop through arr starting from the end as i
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    // loop through i-1 from zero as j
    for (let j = 0; j < i - 1; j++) {
      // compare j and j+1, swap if j is greater than j+1
      if (arr[j] > arr[j+1]) {
        noSwaps = false
        swap(arr, j, j+1)
      }
    }
    console.log('one round')
    if (noSwaps) break
  }   
  // return sorted arr
  return arr
}


// On^2 without optimized, Close to On with optimization/on best case with nearly sorted array
console.log(bubbleSortRefactored([1, 2, 3, 6, 9, 7]))