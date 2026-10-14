class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // width = index (max value) - index (min value)
        // minHeight = Math.min(indexA, indexB)
        // area = width * minHeight

        let i = 0, j = heights.length - 1;
        let area = 0;

        while (i <= j) {
            const width = j - i;
            const minHeight = Math.min(heights[i], heights[j]);
            const currArea = width * minHeight;

            if (currArea > area) {
                area = currArea;
            }

            if (heights[i] > heights[j]) {
                j--;
            } else i++;
        }

        return area;
    }
}
