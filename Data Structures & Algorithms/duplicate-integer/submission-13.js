class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsSet = new Set([]);
        let hasDuplicates = false;

        nums.forEach((num) => {
            if (numsSet.has(num)) {
                hasDuplicates = true;
            }
            numsSet.add(num);
        });

        return hasDuplicates;
    }
}
