/*
 * Given an array of items and their prices
 * Calculate a list of items that you can buy with K money
 */

const prices = [4, 3, 1, 2, 1, 2, 3, 4];
const k = 7;

const results = [];

let acc = 0;

prices.sort((a, b) => a - b);

console.log(prices);

prices.forEach((e) => {
    acc += e;
    if (acc <= k) {
        results.push(e);
    }
});

console.log(results);
