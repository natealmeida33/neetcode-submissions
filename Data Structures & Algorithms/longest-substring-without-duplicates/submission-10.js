class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i = 0;
        let maxL = 0;
        const set = new Set();

        for (let j = 0; j < s.length; j++) {
            while (set.has(s[j])) {
                set.delete(s[i]);
                i++;
            }
            maxL = Math.max(maxL, ((j - i) + 1));
            set.add(s[j]);
        }

        return maxL;
    }
}
