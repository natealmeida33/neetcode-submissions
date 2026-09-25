class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsMap = {};

        nums.forEach((num) => {
            if (numsMap[num] === undefined) {
                numsMap[num] = 0;
            }
            numsMap[num]+=1;
        });

        const frequency = Array.from({ length: nums.length + 1 }, () => []);

        Object.keys(numsMap).forEach((num) => {
            const count = numsMap[num];
            frequency[count].push(num);
        });

        console.log('frequency: ', frequency);

        const list = frequency.flatMap((value) => value).reverse();
        console.log('list: ', list);
        return list.slice(0, k);
    }
}
