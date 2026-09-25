class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const alphabetCounts = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            alphabetCounts[s.charCodeAt(i) - 97]++;
            alphabetCounts[t.charCodeAt(i) - 97]--;
        }

        return !alphabetCounts.find((num) => num !== 0);
        
    }
}
