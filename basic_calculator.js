/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let sign = 1 // 1 or -1
  let sum = 0

  const stack = []

  for (let i = 0; i < s.length; i++) {
    // number
    if (s[i] >= '0' && s[i] <= '9') {
      // 9 or 999 sum = sum + (-1) * 999 => sum = sum - 999
      let num = 0
      while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        num = num + s[i]
        i++
      }
      sum += num * sign
      i--
    } else if (s[i] === '+') {
      // +
      sign = 1
    } else if (s[i] === '-') {
      // -
      sign = -1
    } else if (s[i] == '(') {
      // (
      stack.push(sum)
      stack.push(sign)
      sum = 0
      sign = 1
    } else if (s[i] === ')') {
      // )
      sum = stack.pop() * sum
      sum += stack.pop()
    }
  }
  return sum
};