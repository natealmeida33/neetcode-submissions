class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // Input: nums = [1,2,4,6];
        // Output: [48,24,12,8];

        const n = nums.length;

        const res = new Array(n);
        const prefix = new Array(n);
        const suffix = new Array(n);

        prefix[0] = 1;
        suffix[n - 1] = 1; 

        // prefix
        // [1, , , ]
        // [1, 1, , ]
        // [1, 1, 2, ]
        // [1, 1, 2, 8]

        for (let i = 1; i < n; i++) {
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }
        console.log('prefix: ', prefix);


        // suffix
        // [ , , , 1]
        // [ , , 6, 1]
        // [ 48, 24, 6, 1]

        for (let j = n - 2; j >= 0; j--) {
            suffix[j] = nums[j + 1] * suffix[j + 1];
        }
        console.log('suffix: ', suffix);

        for (let k = 0; k < n; k++) {
            res[k] = prefix[k] * suffix[k];
        }

        return res;
    }
}
