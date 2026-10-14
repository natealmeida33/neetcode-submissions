class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0, j = 1;
        let maxProfit = 0;

        while (j < prices.length) {
            if (prices[i] < prices[j]) {
                const diff = prices[j] - prices[i];
                maxProfit = Math.max(diff, maxProfit);
            } else {
                i = j;
            }
            j++;
        }

        return maxProfit;
    }
}
