class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length <= 1) {
            return [strs];
        }

        const res = {};
        for (let str of strs) {
            const sortedStr = str.split('').sort().join('');
            if (!res[sortedStr]) {
                res[sortedStr] = [];
            }
            res[sortedStr].push(str);
        }

        return Object.values(res);
    }
}
