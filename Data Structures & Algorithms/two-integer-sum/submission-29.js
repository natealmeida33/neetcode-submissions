class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            const diffIndex = map.get(diff);
            if (diffIndex !== undefined) {
                return [diffIndex, i];
            } else {
                map.set(nums[i], i);
            }
        }

        return [];
    }
}
