class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const diffMap = new Map();
        let sumIndicies = [];

        nums.forEach((num, index) => {
            const diff = target - num;
            if (diffMap.get(diff) !== undefined) {
                sumIndicies = [diffMap.get(diff), index];
            }
            diffMap.set(num, index);
        });
        return sumIndicies;
    }
}
