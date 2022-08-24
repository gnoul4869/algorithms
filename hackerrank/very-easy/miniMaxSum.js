/*
* Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

* Example:

* arr = [1, 3, 5, 7, 9]
* The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24. 
*/

const arr = [1, 3, 5, 7, 9];

function miniMaxSum(arr) {
    const minArr = arr.sort((a, b) => a - b);
    const maxArr = [...arr].sort((a, b) => b - a);
    let minSum = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        minSum += minArr[i];
        maxSum += maxArr[i];
    }
    console.log(`${minSum} ${maxSum}`);
}

miniMaxSum(arr);
