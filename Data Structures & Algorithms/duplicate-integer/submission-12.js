class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const sortedNums = nums.sort((numA, numB) => numA - numB);
        const length = sortedNums.length;

        for (let i = 0; i < length - 1; i++) {
            if (sortedNums[i] === sortedNums[i + 1]) {
                return true;
            }
        }

        return false;
    }
}
