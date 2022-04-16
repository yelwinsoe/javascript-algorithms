// Helper function to merge two sorted array
const mergeSortedArray = (arr1, arr2) => {
  const res_arr = []
  // loop through both arr1 and arr2 to the end as i and j
  let i = 0
  let j = 0
  while(i < arr1.length && j < arr2.length) {
    // if i value of arr1 is greater and j value of arr2 then insert i value and increase i index
    if (arr1[i] < arr2[j]) {
      res_arr.push(arr1[i])
      i++
    } else { // else insert j value and increase j index
      res_arr.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    res_arr.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    res_arr.push(arr2[j])
    j++
  }
  return res_arr
}


const mergeSort = (arr) => {
  if (arr.length <= 1) return arr

  // break array into half until only have one value or empty arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return mergeSortedArray(left, right)

  // Then merge those array until full length of array
  // then return sorted arr
}

// console.log(mergeSortedArray([1, 10, 50], [15, 60, 99, 100]))
console.log(mergeSort([1, 4, 2, 9, 5, 8, 19, 3]))