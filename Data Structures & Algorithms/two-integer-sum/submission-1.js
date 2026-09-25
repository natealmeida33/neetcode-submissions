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
            if (map.has(diff)) {
                const diffIndex = map.get(diff);
                return [diffIndex, i];
            } else {
                map.set(nums[i], i);
            }
        }

        return [];
    }
}
