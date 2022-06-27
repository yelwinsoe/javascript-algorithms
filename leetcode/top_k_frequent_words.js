// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest.Sort the words with the same frequency by their lexicographical order.



//   Example 1:

// Input: words = ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.
//   Example 2:

// Input: words = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
// Output: ["the", "is", "sunny", "day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.


/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const counter = {}
  for (let i = 0; i < words.length; i++) {
    if (words[i] in counter) counter[words[i]] += 1
    else {
      counter[words[i]] = 1
    }
  }
  let wordsCounter = Object.keys(counter)
  wordsCounter = wordsCounter.sort((a, b) => {
    return counter[a] == counter[b] ? a.localeCompare(b) : counter[b] - counter[a]
  })

  const res = []
  for (let j = 0; j < k; j++) {
    res.push(wordsCounter[j])
  }

  return res
};