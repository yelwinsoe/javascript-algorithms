const canConstruct = (target, words, memo = {}) => {
  if (target === '') return true
  if (target in memo) return memo[target]

  for (let w of words) {
    if (target.indexOf(w) === 0) {
      memo[target] = canConstruct(target.slice(w.length), words, memo)
      if (memo[target]) {
        return true
      }
    }
  }

  memo[target] = false
  return false
}

// Brute force
// time: O(n^m * m)
// space: O(m^2)

// Memoized
// time: O(n * m^2)
// space: O(m^2)

console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // true
console.log(canConstruct('', ['cat', 'dog'])) // true
console.log(canConstruct('tiger', ['cat', 'dog'])) // false
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeee', 'eeeee', 'eeeee'])) // false