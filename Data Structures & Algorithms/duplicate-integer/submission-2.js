class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // nums=[1,2,3,3]
        const map = new Map();

        let containsDuplicate = false;

        for (let i = 0; i < nums.length; i++) {
            const mapValueFound = map.get(nums[i]) || 0;
            if (mapValueFound) {
                containsDuplicate = true;
                break;
            }
            map.set(nums[i], mapValueFound + 1);
        }

        return containsDuplicate;
    }
}
