class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = nums.reduce((accum, num) => {
            const count = accum[num] || 0;
            accum[num] = count + 1;
            return accum;
        }, {});

        const arr = [];

        Object.entries(obj).forEach(([num, count]) => {
            if (arr[count] === undefined) {
                arr[count] = [];
            }
            arr[count].push(num);
        });

        console.log('obj: ', obj);
        console.log('arr: ', arr);

        let res = [];
        for (let i = arr.length; i >= 0; i--) {
            if (arr[i] && res.length < k) {
                for (let j = 0; j < arr[i].length; j++) {
                    if (arr[i][j]) {
                        res.push(arr[i][j]);
                    }
                }
            }
        }

        return res;
    }
}
