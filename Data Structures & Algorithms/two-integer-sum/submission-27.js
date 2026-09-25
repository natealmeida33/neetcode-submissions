class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let result = [];
        const numsMap = new Map();
        nums.forEach((num, index) => {
            const diff = target - num;
            if (numsMap.get(diff) !== undefined) {
                result = [numsMap.get(diff), index];
            }
            numsMap.set(num, index);
        });
        return result;
    }
}
