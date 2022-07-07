function getMaxAdditionalDinersCount(N, K, M, S) {
  // Write your code here
  let allocation = 0
  const seated = Array(N)

  for (let k = 0; k < S.length; k++) {
    seated[S[k] - 1] = 1
  }

  for (let i = 0; i < N; i++) {
    if (seated[i] !== 1) {
      let temp = true
      for (let j = i - K; j <= i + K; j++) {
        if (j >= 0 && seated[j] === 1) temp = false
      }
      if (temp) {
        seated[i] = 1
        allocation += 1
      }
    }
  }

  return allocation
}

// console.log(getMaxAdditionalDinersCount(10, 1, 2, [2, 6]))
console.log(getMaxAdditionalDinersCount(15, 2, 3, [11, 6, 14]))