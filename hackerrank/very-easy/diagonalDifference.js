/*
* Given a square matrix, calculate the absolute difference between the sums of its diagonals.

* For example, the square matrix is shown below:

* 1 2 3
* 4 5 6
* 9 8 9  

* The left-to-right diagonal = 1 + 5 + 9 = 15
* The right to left diagonal = 3 + 5 + 9 = 17
* Their absolute difference is | 15 - 17 | = 2
*/

const arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
];

function diagonalDifference(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let rightIndex = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        leftSum += arr[i][i];
        rightSum += arr[rightIndex][i];
        rightIndex--;
    }
    return Math.abs(leftSum - rightSum);
}

console.log(diagonalDifference(arr));
