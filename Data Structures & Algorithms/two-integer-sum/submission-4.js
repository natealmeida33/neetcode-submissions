class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // brute force O(n ^ 2)
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] + nums[i] === target) {
                    return [i , j];
                }
            }
        }

        return [-1, -1];
    }
}
