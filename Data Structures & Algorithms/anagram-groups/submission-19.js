class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};

        strs.forEach((str) => {
            const countArr = new Array(26).fill(0);
            [...str].forEach((char) => {
                countArr[char.charCodeAt(0) - 'a'.charCodeAt(0)]+= 1;
            });
            const countArrKey = countArr.join(',');
            if (!res[countArrKey]) res[countArrKey] = [];
            res[countArrKey].push(str);
        });

        return Object.values(res);
    }
}
