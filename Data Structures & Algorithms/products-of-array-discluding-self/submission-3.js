class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            let product = 1;
            for (let j = 0; j < nums.length; j++) {
                console.log(j, nums[j]);
                if (j !== i) {
                    product *= nums[j];
                }

                console.log('product: ', product);

                if (j === nums.length - 1) {
                    res.push(product);
                }
            }
        }

        return res;
    }
}
