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

        const obj = {};
        const length = s.length;

        for (let i = 0; i < length; i++) {
            obj[s.charAt(i)] = (obj[s.charAt(i)] || 0) + 1;
            obj[t.charAt(i)] = (obj[t.charAt(i)] || 0) - 1;
        }

        return Object.values(obj).every((val) => val === 0);
    }
}
