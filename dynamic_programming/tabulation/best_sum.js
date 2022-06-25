const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null)
  table[0] = []
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const combination = [...table[i], num]
        if (!table[i + num] || table[i + num].length > combination.length) {
          table[i + num] = combination
        }
      }
    }
  }
  return table[targetSum]
}

// time: O(M^2n)
// space: O(m^2)

console.log(bestSum(7, [2, 3])) // [2, 2, 3]
console.log(bestSum(7, [5, 3, 4, 7])) // [7]
console.log(bestSum(8, [1, 4, 5])) // [4, 4]
console.log(bestSum(100, [1, 25])) // [25, 25, 25, 25]