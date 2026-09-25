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
        const postfix = new Array(n);

        prefix[0] = 1;
        postfix[n - 1] = 1;

        for (let i = 1; i < n; i++) {
            prefix[i] = nums[i - 1] * prefix[i - 1];
            console.log(nums[i - 1] + ' * ' + prefix[i - 1]);
        }
        console.log('prefix: ', prefix);


        for (let j = n - 2; j >= 0; j--) {
            postfix[j] = nums[j + 1] * postfix[j + 1];
            console.log(nums[j + 1] + ' * ' + postfix[j + 1]);
        }
        console.log('postfix: ', postfix);

        for (let k = 0; k < n; k++) {
            res[k] = prefix[k] * postfix[k];
        }

        return res;
    }

}
