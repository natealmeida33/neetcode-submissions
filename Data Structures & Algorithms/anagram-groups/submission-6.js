class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};

        for (let s of strs) {
            const alphabeticalArray = new Array(26).fill(0);
            for (let ii in s) {
                const asciiIndex = s.charCodeAt(ii) - 'a'.charCodeAt(0); // 97
                alphabeticalArray[asciiIndex] += 1;
            }
            const key = alphabeticalArray.join(',');
            if (!res[key]) {
                res[key] = [s];
            } else {
                res[key].push(s);
            }
        }

        return Object.values(res);
    }
}
