/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  let ans = 0
  const memo = Array(nums1.length + 1).fill(0).map(_ => Array(nums2.length + 1).fill(0))
  for (let i = nums1.length - 1; i >= 0; i--) {
    for (let j = nums2.length - 1; j >= 0; j--) {
      if (nums1[i] == nums2[j]) {
        memo[i][j] = memo[i + 1][j + 1] + 1
        if (ans < memo[i][j]) ans = memo[i][j]
      }
    }
  }
  console.log(memo)
  return ans
};

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]))