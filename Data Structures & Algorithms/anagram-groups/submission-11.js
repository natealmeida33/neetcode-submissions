class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groupedAnagramsMap = {};

        strs.forEach((str, index) => {
            const sortedStr = str.split('').sort().join('');
            // console.log('sortedStr:', sortedStr);
            if (!groupedAnagramsMap[sortedStr]) {
                groupedAnagramsMap[sortedStr] = [];
            }
            groupedAnagramsMap[sortedStr].push(str);
        })

        // console.log('groupedAnagramsMap: ', groupedAnagramsMap);

        return Object.values(groupedAnagramsMap);
    }
}
