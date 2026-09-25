class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // goal: return indicies of two numbers in list that are equal to the target
        // constraint: the indicies may not be the same
        
        // Two Pointer method
        // 1. Sort array
        // 2. Use two pointers, start + end
        // 3. Add up numbers, compare to target
        // 4. If the number is > target end--, otherwise start++

        // sort
        const sortedNums = nums.map((num, index) => {
            return [num, index];
        }).sort((numA, numB) => numA[0] - numB[0]);

        let indicies = [-1, -1];
        let start = 0;
        let end = sortedNums.length - 1;

        while (start < end) {
            const current = sortedNums[start][0] + sortedNums[end][0];
            if (current === target) {
                indicies = [sortedNums[start][1], sortedNums[end][1]];
                break;
            } else {
                if (current < target) {
                    start++;
                } else {
                    end--;
                }
            }
        }

        return indicies;
    }
}
