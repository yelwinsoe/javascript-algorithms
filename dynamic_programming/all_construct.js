const allConstruct = (target, words, memo = {}) => {
  if (target === '') return [[]]
  if (target in memo) return memo[target]

  const result = []

  for (let w of words) {
    if (target.indexOf(w) === 0) {
      const suffix = target.slice(w.length)
      const suffixWays = allConstruct(suffix, words, memo)
      const targetWays = suffixWays.map(way => [w, ...way])
      result.push(...targetWays)
    }
  }

  memo[target] = result
  return result
}

// Brute force
// time: O(n^m * m)
// space: O(m^2)

// Memoized
// time: O(n * m^2)
// space: O(m^2)

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
// [
//   ['purp', 'le'],
//   ['p', 'ur', 'p', 'le']
// ]
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
// [
// ['ab', 'cd', 'ef'],
//   ['a', 'c', 'def'],
//   ['abc', 'def'],
//   ['abcd', 'ef']
// ]
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
// []
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeee', 'eeeee', 'eeeee']))
// []