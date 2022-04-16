const selectionSort = (arr) => {
  // loop through from start to end of the array as i
  for (let i=0; i<arr.length; i++) {
    let currSmallestIdx = i
    // have a temporary index of smallest value of i
    // loop through i+1 as j
    for (let j=i+1; j<arr.length; j++) {
      if (arr[j] < arr[currSmallestIdx]) {
        currSmallestIdx = j
      }
    }
      // if j is smaller than i then set temp index to j
    if (i !== currSmallestIdx) {
      // swap if i and temp index is not the same
      [arr[i], arr[currSmallestIdx]] = [arr[currSmallestIdx], arr[i]]
    }
  }
  // return array
  return arr
}

// On^2 time complexity
// In case you want to minimize swaping use selection sort
console.log(selectionSort([3, 2, 1, 6, 9, 7]))