class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";

        for (const str of strs) {
            const length = str.length;
            res += `${length}#${str}`;
        }

        return res;
    }

    // "5#Hello5#World"

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {     
        const n = str.length;
        const res = [];
        let i = 0, j = 0;

        while (i < n) {
            j = i;

            while (str[j] !== '#') {
                j++;
            }

            const count = str.slice(i, j);

            const countNum = Number(count);

            const start = j + 1;
            const end = start + countNum;

            res.push(str.slice(start, end));
            
            i = end;
        }

        return res;
    }
}
