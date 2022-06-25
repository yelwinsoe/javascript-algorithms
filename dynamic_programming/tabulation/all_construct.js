const allConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill().map(() => [])
  table[0] = [[]]
  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCombinations = table[i].map(subArray => [...subArray, word])
        table[i + word.length].push(...newCombinations)
      }
    }
  }
  return table[target.length]
}

// m = target
// n = wordBank.length
// time: O(n^m)
// space: O(n^m)

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
// [
//   [],
//   [],
//   [],
//   []
// ]
console.log(allConstruct('', ['cat', 'dog'])) // [[]]
console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // 0