const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  if (targetSum in memo) return memo[targetSum]
  let shortestCombination = null

  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderCombination = howSum(remainder, numbers, memo)
    if (remainderCombination !== null) {
      memo[targetSum] = [...remainderCombination, num]
      if (shortestCombination === null || memo[targetSum].length < shortestCombination.length) {
        shortestCombination = memo[targetSum]
      }
    }
  }
  memo[targetSum] = shortestCombination
  return shortestCombination
}

// m = target sum
// n = numbers.length

// Brute force
// time: O(n^m * m)
// space: O(m^2)

// Memorized
// time: O(n * m * m) or O(m^2 * n)
// space: O(m^2)

console.log(howSum(7, [5, 3, 4, 7])) // [7]
console.log(howSum(8, [2, 3, 5])) // [3, 5]
console.log(howSum(8, [1, 4, 5])) // [4, 4]
console.log(howSum(1000, [1, 2, 5, 25])) // [25, 25, 25, 25]