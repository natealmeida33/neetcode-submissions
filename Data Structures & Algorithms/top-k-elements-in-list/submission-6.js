class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = nums.reduce((accum, num) => {
            const count = accum[num] ?? 0;
            accum[num] = count + 1; 
            return accum;
        }, {});
        
        const sortedKeys = Object.entries(obj).sort(([_A, countA], [_B, countB]) => {
            return countB - countA;
        });

        return sortedKeys.slice(0, k).map(([key]) => key);
    }
}
