/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  // loop through the board and find the possible start position
  // Do a backtracking
    // if the current index to backtrack is greater than the word we found the word
    // Check out of bound 
    // backtrack all 4 directions // recursively
  // if nothing found return false

  for (let i=0; i<board.length; i++) {
    for (let j=0; j<board[0].length; j++) {
      if (board[i][j] === word[0]) {
        if (backtrack(i, j, 0, word)) {
          return true
        }
      }
    }
  }
  
  function backtrack (row, col, index, word) {
    if (index >= word.length) return true
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== word[index]) {
      return false
    }

    const temp = board[row][col]
    board[row][col] = ' '
    const found = backtrack(row - 1, col, index + 1, word) || backtrack(row, col - 1, index + 1, word) || backtrack(row + 1, col, index + 1, word) || backtrack(row, col + 1, index + 1, word)
    board[row][col] = temp
    return found
  }

  // if nothing found
  return false

}

console.log([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]])
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"))
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"))
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"))
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ADEE"))
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "FCCB"))