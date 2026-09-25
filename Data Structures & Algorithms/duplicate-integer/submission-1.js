class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // nums=[1,2,3,3]
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const mapValueFound = map.get(nums[i]) || 0;
            map.set(nums[i], mapValueFound + 1);

        }    
        return Array.from(map.values()).some((value) => {
            return value > 1;
        })
    }
}
