class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sSorted = Array.from(s).sort().join('')
        const tSorted = Array.from(t).sort().join('');
        return sSorted === tSorted;
    }
}
