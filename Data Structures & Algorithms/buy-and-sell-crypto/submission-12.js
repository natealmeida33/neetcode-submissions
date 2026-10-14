class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minBuy = prices[0];
        let maxP = 0;

        for (const sell of prices) {
            const diff = sell - minBuy;
            maxP = Math.max(maxP, diff)
            minBuy = Math.min(minBuy, sell);
        }

        return maxP;
    }
}
