class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const sortedNums = nums.sort((numA, numB) => numA - numB);

        for (let i = 1; i < sortedNums.length; i++) {
            if (nums[i] === nums[i - 1]) {
                return true;
            }
        }

        return false;
    }
}
