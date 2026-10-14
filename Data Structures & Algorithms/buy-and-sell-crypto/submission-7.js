class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0, j = 1;
        let maxProfit = 0;

        while (i !== j && j < prices.length) {
            if (prices[i] < prices[j]) {
                const diff = prices[j] - prices[i];
                maxProfit = Math.max(diff, maxProfit);
                j++;
                continue;
            }
            if (prices[i] >= prices[j]) {
                i = j;
            }
            j++;
        }

        return maxProfit;
    }
}
