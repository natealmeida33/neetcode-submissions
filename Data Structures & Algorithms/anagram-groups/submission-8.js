class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj = {};

        for (const str of strs) {
            const arr = new Array(26).fill(0);
            for (const ii in str) {
                arr[str.charCodeAt(ii) - 'a'.charCodeAt(0)]++;
            }
            console.log('arr: ', arr);

            const key = arr.reduce((accum, value, index) => {
                if (value !== 0) {
                    accum += `${index}:${value}`;
                }
                return accum;
            }, '');

            if (!obj.hasOwnProperty(key)) {
                obj[key] = [];
            }
            obj[key].push(str);

        }

        return Object.values(obj);
    }
}

