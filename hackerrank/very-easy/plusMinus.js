/*
* Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal * value of each fraction on a new line with 6 places after the decimal.

* Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.

* Example:
*
* arr = [1, 1, 0, -1, -1]
* There are 5 elements, two positive, two negative and one zero. 
* Their ratios are 2 / 5 = 0.400000, 2 / 5 = 0.400000, 1 / 2 = 0.200000
*/

arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
    const n = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        } else if (arr[i] < 0) {
            negativeCount++;
        } else if (arr[i] === 0) {
            zeroCount++;
        }
    }

    console.log(positiveCount / n);
    console.log(negativeCount / n);
    console.log(zeroCount / n);
}

plusMinus(arr);
