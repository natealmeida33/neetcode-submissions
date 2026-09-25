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
            const mapCount = map.get(s[i]) || 0;
            map.set(s[i], mapCount + 1);
        }

        console.log('map 1: ', map);

        for (let j = 0; j < t.length; j++) {
            const mapCount = map.get(t[j]);
            map.set(t[j], mapCount ? mapCount - 1 : 1);
        }

        console.log('map 2: ', map);

        return Array.from(map.values()).every((value) => {
            return value === 0;
        });


    }
}
