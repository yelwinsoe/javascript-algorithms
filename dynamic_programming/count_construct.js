const canConstruct = (target, words, memo = {}) => {
  if (target === '') return 1
  if (target in memo) return memo[target]

  let totalCount = 0

  for (let w of words) {
    if (target.indexOf(w) === 0) {
      memo[target] = canConstruct(target.slice(w.length), words, memo)
      totalCount += memo[target]
    }
  }

  memo[target] = totalCount
  return totalCount
}

// Brute force
// time: O(n^m * m)
// space: O(m^2)

// Memoized
// time: O(n * m^2)
// space: O(m^2)

console.log(canConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // 4
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeee', 'eeeee', 'eeeee'])) // false