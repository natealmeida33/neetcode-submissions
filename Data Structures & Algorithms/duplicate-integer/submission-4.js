class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const length = nums.length;
        const set = new Set([...nums]);
        console.log('set: ', set);
        return length > Array.from(set).length;
    }
}
