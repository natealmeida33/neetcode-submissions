class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramObj = strs.reduce((accum, str) => {
            const currSorted = str.split('').sort().join('');
            accum[currSorted] = [];
            return accum;
        }, {})

        strs.forEach((str) => {
            const currSorted = str.split('').sort().join('');
            anagramObj[currSorted].push(str);
        })

        return Object.values(anagramObj);
    }
}
