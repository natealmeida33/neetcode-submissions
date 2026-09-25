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

        const sortedS = s.split('').sort((charA, charB) => charA.localeCompare(charB)).join('');
        const sortedT = t.split('').sort((charA, charB) => charA.localeCompare(charB)).join('');

        return sortedS === sortedT;
    }
}
