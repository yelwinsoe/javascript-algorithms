// To get digit of a number at a different position
const getDigit = (num, place) => {
  // // change the number to string
  // let num_str = num.toString()
  // // calculate the real index
  // let real_place = num_str.length - place - 1
  // // convert and return the digit 
  // return parseInt(num_str.charAt(real_place)) || 0

  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

// The number of digit in a number
const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

// most number of digit in an array of number
const mostDigit = (arr) => {
  let res = 0
  for (let i=0; i<arr.length; i++) {
    res = Math.max(res, digitCount(arr[i]))
  }
  return res
}

const radixSort = (arr) => {
  const most_digit = mostDigit(arr)
  for (let i=0; i<most_digit; i++) {
    const bucket = Array.from({length: 10}, () => [])
    for (let j=0; j<arr.length; j++) {
      const bucketKey = getDigit(arr[j], i)
      bucket[bucketKey].push(arr[j])
    }
    arr = [].concat(...bucket)
  }
  return arr
}

// console.log(getDigit(12345, 1))
// console.log(digitCount(10000))
console.log(radixSort([234, 5, 34, 2, 78002, 1]))