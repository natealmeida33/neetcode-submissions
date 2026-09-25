class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return "";

        return strs.reduce((accum, str) => {
            const length = str.length;
            accum += `${length}#${str}`;
            return accum;
        }, '');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log('input: ', str);
        // input:  4#neet4#code4#love3#you

        if (str.length === 0) return [];

        let i = 0;
        const res = [];

        while (i < str.length) {
            let j = i;
            while (str.charAt(j) !== '#') {
                j++;
            }
            const strCount = Number(str.substring(i, j));
            i = j + 1;
            j = i + strCount;
            res.push(str.substring(i, j));
            i = j;
        }

        return res;
        
    }
}
