/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {

  let result = []
  let i = 0
  let n = words.length
  while (i < n) {
    let j = i + 1
    let lineLength = words[i].length

    while (j < n && (lineLength + words[j].length + (j - i - 1)) < maxWidth) {
      lineLength += words[j].length
      j++
    }

    // determine middle or left justify
    const diff = maxWidth - lineLength
    const numberOfWords = j - i
    if (numberOfWords === 1 || j >= n) result.push(leftJustify()) // left justify
    else result.push(middleJustify()) // right justify

    function leftJustify() {
      let spacesToApply = diff - (j - i - 1)
      let res = words[i]
      for (let k = i + 1; k < j; k++) {
        res += ' '
        res += words[k]
      }
      res += ' '.repeat(spacesToApply)
      return res
    }

    function middleJustify() {
      let spacesNeed = j - i - 1
      let spaces = diff / spacesNeed
      let extraSpaces = diff % spacesNeed
      let res = words[i]
      for (let k = i + 1; k < j; k++) {
        let spacesToApply = spaces + (extraSpaces-- > 0 ? 1 : 0)
        res += ' '.repeat(spacesToApply)
        res += words[k]
      }
      return res
    }

    // start of next line
    i = j
  }

  return result

}


fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16).forEach((line) => console.log(line))
console.log('\n')
fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16).forEach((line) => console.log(line))
console.log('\n')
fullJustify(["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain", "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"], 20).forEach((line) => console.log(line))
console.log('\n')