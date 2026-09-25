class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let duplicate = false;

        // nums=[1,2,3,3]

        for (let i = 0; i < nums.length; i++) {
            console.log(i);
            for (let j = i + 1; j < nums.length; j++) {
               console.log(`${nums[i]}:${nums[j]}`);
                if (nums[j] == nums[i]) {
                    duplicate = true;
                }
            }
        }

        return duplicate;
    }
}
