class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const map = new Map();

        // iterate over string 's', add [char, count + 1]
        for (let i = 0; i < s.length; i++) {
            const currentChar = s.charAt(i);
            const charCountFound = map.get(currentChar) ?? 0;
            map.set(currentChar, charCountFound + 1);
        }

        // iterate over string 't' add [char, count - 1]
        for (let j = 0; j < t.length; j++) {
            const currentChar = t.charAt(j);
            const charCountFound = map.get(currentChar) ?? 0;
            map.set(currentChar, charCountFound - 1);
        }

        console.log(map.values());

        // iterate over each value, ensure they are all 0
        return [...map.values()].every((value) => value === 0);
    }
}
