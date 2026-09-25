class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const alphabetArray = Array.from({length: 26}).fill(0);
        
        for (let i = 0; i < s.length; i++) {
            const asciiIndex = s.charCodeAt(i) - 'a'.charCodeAt(0);
            console.log('asciiIndex: ', asciiIndex);
            alphabetArray[asciiIndex] += 1;
        }

        console.log('alphabetArray: ', alphabetArray);

        for (let j = 0; j < t.length; j++) {
            const asciiIndex = t.charCodeAt(j) - 'a'.charCodeAt(0);
            console.log('asciiIndex: ', asciiIndex);
            alphabetArray[asciiIndex] -= 1;
        }

        console.log('alphabetArray: ', alphabetArray);
        
        return alphabetArray.every((value) => value === 0);
    }
}
