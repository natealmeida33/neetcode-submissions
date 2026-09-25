class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // create a map
        const map = new Map();
        // iterate over list, populate map with [index, target - current]
        for (let i = 0; i < nums.length; i++) {
            const current = nums[i];    
            const diff = target - current;

            const isTarget = map.has(diff);

            if (isTarget) {
                return [map.get(diff), i];
            } else {
               map.set(current, i);
            }
        }

        return [-1, -1];
    }
}
