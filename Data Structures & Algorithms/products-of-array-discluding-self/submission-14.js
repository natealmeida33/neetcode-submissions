class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // nums=[0,0]
        // nums=[-1,0,1,2,3]

        const zeroIndicies = new Set();

        const totalProduct = nums.reduce((accum, num, i) => {
            if (num === 0) {
                zeroIndicies.add(i);
            }
            return accum *= num || 1;
        }, 1);

        console.log('totalProduct: ', totalProduct);

        const res = [];

        nums.forEach((num, i) => {
            if (zeroIndicies.size > 0 && !zeroIndicies.has(i) || zeroIndicies.has(i) && zeroIndicies.size > 1) {
                res.push(0);
            } else {
                const product = num !== 0 ? totalProduct / num : totalProduct;
                console.log('product: ', product);
                res.push(product);
            }
        })

        return res;
    }
}
