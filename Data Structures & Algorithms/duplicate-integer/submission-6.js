class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // Possible Solutions:
        // O(n^2) - brute force comparison
            // Compares each value with each remaining values
        // O(n*log(n)) - Sort, loop and check adjacent value
            // Sorting O(n*log(n)), O(n) iterable, O(1) comparison to next value
        // O(n) - Create Set(), check for duplicates
            // Iterate over list once, lookup value in Set O(1)

        const set = new Set();

        for (let i = 0; i < nums.length; i++) {
            const value = nums[i];
            if (set.has(value)) {
                return true;
            }
            set.add(value);
        }
        return false;
    }
}
