const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  if (targetSum in memo) return memo[targetSum]

  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderResult = howSum(remainder, numbers, memo)
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num]
      return memo[targetSum]
    }
  }
  memo[targetSum] = null
  return null
}

console.log(howSum(7, [2, 3]))
console.log(howSum(7, [5, 3, 4, 7]))
console.log(howSum(7, [2, 4]))
console.log(howSum(8, [2, 3, 5]))
console.log(howSum(300, [7, 14]))