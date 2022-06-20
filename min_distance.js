/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var shortestDistance = function(wordsDict, word1, word2) {

  let w1Idx = null
  let w2Idx = null
  let minDistance = wordsDict.length
  for (let i=0; i<wordsDict.length; i++) {
      if (wordsDict[i] === word1) w1Idx = i
      if (wordsDict[i] === word2) w2Idx = i

      if (w1Idx !== null && w2Idx !== null) {
        minDistance = Math.min(minDistance, Math.abs(w1Idx - w2Idx))
      }
  }
  return minDistance
};

console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice"))
console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "makes", "coding"))