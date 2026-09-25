class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return "";

        const encodedStr = strs.reduce((accum, str) => {
            accum += `${str.length}#${str}`;
            return accum;
        }, '');

        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) return [];

        let i = 0;
        const res = [];

        while (i < str.length) {
            console.log('i: ', i);
            let j = i;

            while (str[j] !== '#') {
                j++;
            }

            const count = Number(str.substring(i, j));
            i = j + 1;
            j = i + count;
            res.push(str.substring(i, j))
            i = j;
        }

        return res;
    }
}
