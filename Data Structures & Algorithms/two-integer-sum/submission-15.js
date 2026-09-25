class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        

        for (const ii in nums) {
            const diff = target - nums[ii];
            if (map.has(diff)) {
                return [Number(ii), Number(map.get(diff))];
            }
            map.set(nums[ii], ii);
        }

        return [-1, -1];
    }
}
