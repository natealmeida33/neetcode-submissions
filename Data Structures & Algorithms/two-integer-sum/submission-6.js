class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let indicies = [-1, -1];

        const map = new Map();

        // iterate over list of nums, set Map: [diff, index]
        nums.forEach((num, i) => {
            const diff = target - num;
            const diffIndexFound = map.get(diff);

            if (diffIndexFound !== undefined) {
                indicies = [i, diffIndexFound];
            } else {
                map.set(num, i);
            } 
        });

        return indicies;
    }
}
