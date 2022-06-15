
// Memorization
function fib(n, memory=[]) {
  if (n <= 2) return 1
  if (memory[n]) return memory[n]
  const newCalculation = fib(n-1, memory) + fib(n-2, memory)
  memory[n] = newCalculation
  console.log(memory)
  return newCalculation
}

const memory = [undefined, 1, 1]
// console.log(fib(10, memory))


// Tabulation
function fibTab(n) {
  if (n <= 2) return 1
  let fibNums = [0, 1, 1]
  for (let i=3; i<=n; i++) {
    fibNums[i] = fibNums[i-1] + fibNums[i-2]
  }
  return fibNums[n]
}

console.log(fibTab(10000))