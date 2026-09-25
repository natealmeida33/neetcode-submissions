class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length <= 1) {
            return [strs];
        }

        return strs.reduce((accum, value) => {
            const sortedString = value.split('').sort().join('');
            const groupIndex = accum.findIndex((array) => {
                return sortedString === array[0]?.split('').sort().join('');
            });
            if (groupIndex !== -1) {
                accum[groupIndex].push(value);
            } else {
                accum.push([value]);
            }
            return accum;
        }, []);
    }
}
