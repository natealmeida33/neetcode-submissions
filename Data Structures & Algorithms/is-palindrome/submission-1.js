class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0, j = s.length - 1;

        const isValidChar = (char) => {
            if (
                char >= 'a' && char <= 'z'
                || char >= 'A' && char <= 'Z'
                || char >= '0' && char <= '9'
            ) {
                return true;
            }
            return false;
        }

        let isPal = true;

        while (i <= j) {
            if (!isValidChar(s[i])) {
                i++;
                continue;
            };
            if (!isValidChar(s[j])) {
                j--;
                continue;
            };

            if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                isPal = false;
                break;
            }
            i++;
            j--;
        }

        return isPal;
    }
}
