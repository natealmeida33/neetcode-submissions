class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = nums.reduce((accum, num) => {
            const count = accum[num] ?? 0;
            accum[num] = count + 1;
            return accum;
        }, {});

        const heap = new MinPriorityQueue((x) => x[1]);

        for (const [num, count] of Object.entries(obj)) {
            heap.enqueue([num, count]);
            if (heap.size() > k) {
                heap.dequeue();
            }
        }

        const res = [];

        for (let i = 0; i < k; i++) {
            const [num] = heap.dequeue();
            res.push(num);
        }

        return res;
    }
}
