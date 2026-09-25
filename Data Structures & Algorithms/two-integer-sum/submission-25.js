class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        let result = [];

        nums.forEach((num, index) => {
            map.set(num, index);
        });
        nums.forEach((num, index) => {
            const diff = target - num;
            if (map.get(diff) !== undefined && map.get(diff) !== index) {
                result = [index, map.get(diff)];
            }
        })
        
        return result;
    }
}
