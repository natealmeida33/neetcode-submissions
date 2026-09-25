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

        res[0] = 1;
        res[n - 1] = 1;

        for (let i = 1; i < n; i++) {
            res[i] = nums[i - 1] * res[i - 1];
        }
        console.log('res: ', res);

        let postfix = 1;
        for (let j = n - 1; j >= 0; j--) {
            res[j] *= postfix;
            postfix *= nums[j];
        }

        return res;
    }

}
