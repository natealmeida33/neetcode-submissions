class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // Possible Solutions:
        // Check if both strings are the same length

        // Create a Map and store the character and its count
            // Iterate over each string char - O(n),
            // Add or subtract value in map O(1)
            // Iterate over map values and check if every one is 0

        // Sort strings, check if they are equal
            // Sorting - O(n*log(n)), comparison O(1)

        if (s.length !== t.length) return false;

        const sortedS = s.split('').sort().join('');
        const sortedT = t.split('').sort().join('');
        
        return sortedS === sortedT;

        
    }
}
