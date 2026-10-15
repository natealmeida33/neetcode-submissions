class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // iterate right pointer
        // add curr char to the Set
        // move left pointer once replacement count === k

        let left = 0, maxL = 0;
        const map = new Map();

        for (let right = 0; right < s.length; right++) {
            map.set(s[right], (map.get(s[right]) ?? 0) + 1); 
              
            const maxFreq = Math.max(...map.values());
            const replacements = (right - left + 1) - maxFreq;

            if (replacements <= k) {
                maxL = Math.max(maxL, right - left + 1);             
            } else {
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }
        }

        return maxL;
    }
}
