class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsMap = {};

        nums.forEach((num) => {
            if (numsMap[num] === undefined) {
                numsMap[num] = 0;
            }
            numsMap[num]+=1;
        });

        return Object.entries(numsMap).sort(([keyA, countA], [keyB, countB]) => {
            return countB - countA;
        }).map(([key]) => key).slice(0, k);
    }
}
