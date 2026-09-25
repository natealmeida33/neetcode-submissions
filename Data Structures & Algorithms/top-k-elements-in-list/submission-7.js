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

        const sortedEntries = Object.entries(obj).sort(([_A, countA], [_B, countB]) => {
            return countB - countA;
        });

        return sortedEntries.slice(0, k).map(([value]) => {
            return value;
        })

    }
}
