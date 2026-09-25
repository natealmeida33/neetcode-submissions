class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = {};
        let answer = [];

        nums.forEach((num, index) => {
            const diff = target - num;
            if (seen[diff] !== undefined) {
                answer = [seen[diff], index];
            }

            seen[num] = index;
        });
        
        return answer;
    }
}
