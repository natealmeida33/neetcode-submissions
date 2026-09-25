class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj = {};

        for (const str of strs) {
            const sortedStr = str.split('').sort((charA, charB) => charA.localeCompare(charB)).join('');
            if (!obj.hasOwnProperty(sortedStr)) {
                obj[sortedStr] = [];
            }
            obj[sortedStr].push(str);
        }

        return Object.values(obj);
    }
}

