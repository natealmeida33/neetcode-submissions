class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = new Map();
        for (let i = 0; i < numbers.length; i++) {
            const diff = target - numbers[i];
            const diffIndex = map.get(diff);
            if (diffIndex !== undefined) {
                const minIndex = Math.min(diffIndex, i);
                const maxIndex = Math.max(diffIndex, i);
                return [minIndex + 1, maxIndex + 1];

            } else map.set(numbers[i], i);
        }

        return [-1, -1];
    }
}
