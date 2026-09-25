class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {};

        for (const num of nums) {
            obj[num] = (obj[num] || 0) + 1;
        }
        
        return Object.entries(obj).sort(([keyA, countA], [keyB, countB]) => countB - countA).slice(0, k).map(([key, _]) => key)
    }
}
