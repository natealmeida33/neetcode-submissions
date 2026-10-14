class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lowestPriceIndex = 0;
        let maxProfit = 0;

        prices.forEach((price, i) => {
            if (price < prices[lowestPriceIndex]) {
                lowestPriceIndex = i;
            }
            const diff = price - prices[lowestPriceIndex];
            maxProfit = Math.max(diff, maxProfit);
        });

        return maxProfit;
    }
}
