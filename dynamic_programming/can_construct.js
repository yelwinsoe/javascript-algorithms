const canConstruct = (target, words) => {
  if (target === '') return true

  for (let w of words) {
    const remaining = target.slice(0, w.length)
    // console.log(remaining)
    // console.log(w)
    // console.log(target.slice(w.length))
    // console.log('\n')
    if (remaining === w) {
      const recursive = canConstruct(target.slice(w.length), words)
      if (recursive === '') {
        return true
      }
    }
  }

  return false
}

// console.log(canConstruct('', ['cat', 'dog'])) // true
// console.log(canConstruct('tiger', ['cat', 'dog'])) // false
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true