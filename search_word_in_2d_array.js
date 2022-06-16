/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
  // Use backtracking/recursive call to check all the possible path
  // If found return true else false
  
  const rows = board.length
  const cols = board[0].length
  let tempBoard = board

  for (let i=0; i<rows; i++) {
      for (let j=0; j<cols; j++) {
          if (backtrack(i, j, word)) {
              return true
          }
      }
  }
  
  // Backtracking function
  function backtrack (row, col, suffix) {
  
      // edge case
      if (suffix.length == 0) return true

      // if the backtest index is out of bound then return false
      if (row < 0 || row == rows || col < 0 || col == cols || tempBoard[row][col] != suffix[0]) {
          return false
      }
      
      let res = false
      tempBoard[row][col] = '#'
      
      // explore the 4 neighbor directions
      const offset = [[0, 1],[1, 0], [0, -1], [-1, 0]]
      for (let k=0; k<offset.length; k++) {
          res = backtrack(row+offset[k][0], col+offset[k][1], suffix.slice(1, suffix.length))
          if (res) break
      }
      
      // revert the change
      tempBoard[row][col] = suffix[0]
      return res
  }
  
  // no match found
  return false
  
};


console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"))
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"))
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"))