const insertionSort = (arr) => {
  // loop through from second index of array as i
  for (let i=1; i<arr.length; i++) {
    // loop through all previous, starting from i-1 and compare to decide where to insert
    let currentVal = arr[i]
    for (var j=i-1; j>=0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j]
    }
    arr[j+1] = currentVal
    // insert to the correct place
  }

  return arr
  // return array
}

// O(n) best, O(n^2) average so O(n^2)
console.log(insertionSort([2, 1, 19, 4, 27, 90]))