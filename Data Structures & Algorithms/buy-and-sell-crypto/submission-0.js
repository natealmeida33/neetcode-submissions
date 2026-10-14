class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;

        for (let i = 0; i < prices.length - 1; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                const diff = prices[j] - prices[i];
                if (diff < 0) continue;
                maxProfit = Math.max(maxProfit, diff);
            }
        }

        return maxProfit;
    }
}
