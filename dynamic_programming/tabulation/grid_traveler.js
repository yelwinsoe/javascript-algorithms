const gridTraveler = (m, n) => {
  const table = Array(m + 1)
    .fill(0)
    .map(_ => Array(n + 1).fill(0))
  table[1][1] = 1

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j]
      if (j + 1 <= n) {
        table[i][j + 1] += current
      }
      if (i + 1 <= m) {
        table[i + 1][j] += current
      }
    }
  }
  return table[m][n]
}

// Tabulation recipe

// Visualize the problem as table
// Size the table based on the inputs
// Initialize the table with default values
// Seed the trivial answer into the table, for example - 1x1 grid is 1 in grid traveler
// Iterate through the table

console.log(gridTraveler(1, 1)) // 1
console.log(gridTraveler(2, 3)) // 3
console.log(gridTraveler(3, 2)) // 3
console.log(gridTraveler(3, 3)) // 6
console.log(gridTraveler(18, 18)) // 2333606220