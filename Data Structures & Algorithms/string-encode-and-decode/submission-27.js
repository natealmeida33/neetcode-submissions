class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return "";
        const count = [];
        
        const combinedStrs = strs.reduce((accum, str) => {
            count.push(str.length);
            accum += str;
            return accum;
        }, '');

        return `${count.join(',')}#${combinedStrs}`;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log('input: ', str);
        // input:  4,4,4,3#neetcodeloveyou
        if (str.length === 0) return [];

        let i = 0;
        const sizes = [];
        const res = [];

        while (str.charAt(i) !== '#') {
            let count = '';
            while(str.charAt(i) !== ',' && str.charAt(i) !== '#') {
                count += str.charAt(i++);
            }
            sizes.push(Number(count));
            if (str.charAt(i) === ',') {
                i++;
            }
        }

        i++;

        for (const size of sizes) {
            res.push(str.substring(i, i + size));
            i+= size;
        }

        
        return res;
    }
}
