class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let max = 0;

        for (const num of nums) {
            let curr = num;
             let streak = 0;
             while (set.has(curr)) {
                streak++;
                curr++;
             }
            max = Math.max(max, streak);
        }

        return max;
    }
}
