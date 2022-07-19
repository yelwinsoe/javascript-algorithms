function fourNumberSum(array, targetSum) {
  // Write your code here.
  const quadruplets = []
  const twoSumMap = {}
  for (let i=0; i<array.length; i++) {
    for (let j=i+1; j<array.length; j++) {
      const currentSum = array[i] + array[j]
      const diff = targetSum - currentSum
      if (diff in twoSumMap) {
        for (const pair of twoSumMap[diff]) {
          quadruplets.push(pair.concat([array[i], array[j]]))
        }
      }
    }

    for (let k=0; k<i; k++) {
      const currentSum = array[i] + array[k]
      if (!(currentSum in twoSumMap)) {
        twoSumMap[currentSum] = [[array[k], array[i]]]
      } else {
        twoSumMap[currentSum].push([array[k], array[i]])
      }
    }
  }

  return quadruplets
}

// Do not edit the line below.
const arr = [7, 6, 4, -1, 1, 2]
const targetSum = 16

console.log(fourNumberSum(arr, targetSum))
// [[7, 6, 4, -1], [7, 6, 1, 2]]