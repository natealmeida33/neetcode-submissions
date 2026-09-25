class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const length = nums.length;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (i !== j && nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }

        return [-1, -1];
    }
}
