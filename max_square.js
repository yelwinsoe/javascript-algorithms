// var maximalSquare = function(matrix) {
//   const rows = matrix.length, cols = rows > 0 ? matrix[0].length : 0;
//   // Create dp array
//   const dp = Array(rows + 1).fill(0).map(() => Array(cols + 1).fill(0));

//   // Keep trac of the max square length
//   let maxsqlen = 0;
//   for (let i = 1; i <= rows; i++) {
//       for (let j = 1; j <= cols; j++) {
//           // Only check cells that have a 1 in the original array
//           if (matrix[i-1][j-1] == '1'){
//               // Check if the current cell is part of a square
//               dp[i][j] = Math.min(Math.min(dp[i][j - 1], dp[i - 1][j]), dp[i - 1][j - 1]) + 1;
//               maxsqlen = Math.max(maxsqlen, dp[i][j]);
//           }
//       }
//   }
//   // Return the area of the square
//   return maxsqlen * maxsqlen;
// };

var maximalSquare = (matrix) => {
  const rows = matrix.length, cols = rows > 0 ? matrix[0].length : 0;
  console.log(matrix)
  const dp = Array(rows + 1).fill(0).map(_ => Array(cols + 1).fill(0))
  // console.log(dp)
  let maxsqlen = 0
  for (let i=1; i<=rows; i++) {
    for (let j=1; j<=cols; j++) {
      if (matrix[i-1][j-1] == '1') {
        dp[i][j] = Math.min(Math.min(dp[i][j - 1], dp[i - 1][j]), dp[i - 1] [j - 1]) + 1
        maxsqlen = Math.max(maxsqlen, dp[i][j])
      }
    }
  }
  console.log(dp)
  return maxsqlen * maxsqlen
}

console.log(maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]))