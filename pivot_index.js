/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    // add all number in array
    // loop through the nums
    // add up all left number
    // all sum - left sum - index number is same as left sum then we found the index
    let allSum = nums.reduce((a, b) => a + b, 0)
    let left = 0
    let index = 0
    while(index < nums.length) {
      left = nums.slice(0, index).reduce((a, b) => a + b, 0)
      if (allSum - left - nums[index] === left) break
      index++
    }
    if (index === nums.length) return -1
    return index
};



nums1 = [1,7,3,6,5,6] // 3
nums2 = [1,2,3] // -1 no index
nums3 = [2,1,-1] // 0

console.log(pivotIndex(nums1))
console.log(pivotIndex(nums2))
console.log(pivotIndex(nums3))