class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsSet = nums.reduce((accum, num) => {
            accum.add(num);
            return accum;
        }, new Set());
        return numsSet.size !== nums.length;
    }
}
