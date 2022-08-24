/*
 * You are given an array prices where prices[i] is the price of a given stock on the i th day
 *
 * You want to maximize your profit by choosing a single day to buy stock and choosing a different day in the future to sell that stock
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0
 * 
 * ----------------------------------------------------------------------------------------------------------------------------------------
 * 
 ? Example:
 ? 
 ? Input: prices = [7,1,5,3,6,4]
 ? Output: 5
 ? Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5
 ! Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell! 
 */

const prices = [7, 1, 5, 3, 6, 4];

let possibleBuy;
let possibleProfit = 0;
prices.forEach((price, i) => {
    console.log(`DAY ${i + 1}-----------------------------------------`);

    console.log(`Today's price is ${price}`);
    console.log(`Current mimimum price to buy is ${possibleBuy}`);
    console.log(`Current maximum profit is ${possibleProfit}`);

    if (price < possibleBuy || !possibleBuy) {
        possibleBuy = price;
        console.log(`New minimum price: ${price}`);
    }

    if (price - possibleBuy > possibleProfit) {
        possibleProfit = price - possibleBuy;
        console.log(`New maximum profit: ${possibleProfit}`);
    }

    console.log('End of day');
});

console.log('=====================================================');
console.log(`Maximum profit: ${possibleProfit}`);
