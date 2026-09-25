class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let result = [];
        let i = 0;
        let j = nums.length - 1;

        const numEntries = nums.map((num, index) => [num, index]);
        console.log('numEntries: ', numEntries);
        const sortedNumEntries = numEntries.sort(([numA], [numB]) => {
            return numA - numB;
        });
        console.log('sortedNumEntries: ', sortedNumEntries);


        while (i !== j) {
            const total = sortedNumEntries[i][0] + sortedNumEntries[j][0];
            if (total === target) {
                result = [sortedNumEntries[i][1], sortedNumEntries[j][1]];
                break;
            } else if (total < target) {
                i++;
            } else if (total > target) {
                j--;
            } else {
                i++;
                j--;
            }
        }
        
        return result;
    }
}
