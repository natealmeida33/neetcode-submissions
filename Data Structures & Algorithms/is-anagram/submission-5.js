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

        const map = new Map();
        for (let i = 0; i < s.length; i++) {
            map.set(s[i], 1 + (map.get(s[i]) || 0));
            map.set(t[i], (map.get(t[i]) || 0) - 1);
        }

        console.log('map: ', map);

        return Array.from(map.values()).every((value) => {
            return value >= 0 && value % 2 === 0;
        });
    }
}
