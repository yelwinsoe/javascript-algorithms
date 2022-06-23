const canConstruct = (target, words) => {
  if (target === '') return true

  for (let w of words) {
    const remaining = target.slice(0, w.length)
    if (remaining === w) {
      if(canConstruct(target.slice(w.length), words)) {
        return true
      }
    }
  }

  return false
}

console.log(canConstruct('', ['cat', 'dog'])) // true
console.log(canConstruct('tiger', ['cat', 'dog'])) // false
console.log(canConstruct('abcdefabcdefababcddefcdabc', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true