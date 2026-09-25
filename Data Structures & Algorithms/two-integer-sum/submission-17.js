class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const length = nums.length;
        let startIndex = 0;
        let endIndex = length - 1;
        let res = [-1, -1];

        const sortedNums = nums.map((num, index) => {
            return [num, index];
        }).sort((numA, numB) => numA[0] - numB[0]);

        while (startIndex < endIndex) {
            const startValue = sortedNums[startIndex];
            const endValue = sortedNums[endIndex];

            const total = startValue[0] + endValue[0];

            if (total === target) {
                res = [Math.min(startValue[1], endValue[1]), Math.max(startValue[1], endValue[1])];
                break;
            } else if (total < target) {
                startIndex++;
            } else {
                endIndex--;
            }
        }

        return res;
    }
}
