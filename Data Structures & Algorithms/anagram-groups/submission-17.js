class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strMap = strs.reduce((accum, str) => {
            const counts = [...str].reduce((keyAccum, char) => {
                const count = char.charCodeAt(0) - 'a'.charCodeAt(0);
                keyAccum.push(count);
                return keyAccum;
            }, []);

            // console.log('counts: ', counts);
            const sortedKey = counts.sort().join(',');
            // console.log('sortedKey ', sortedKey);

            if (!accum[sortedKey]) {
                accum[sortedKey] = [];
            }

            accum[sortedKey].push(str);

            return accum;
        }, {});

        return Object.values(strMap);
    }
}
