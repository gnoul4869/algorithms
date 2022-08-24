/*
* Task
* Calculate the hourglass sum for every hourglass in A, then print the maximum hourglass sum.

* Example

* In the array shown above, the maximum hourglass sum is 7 for the hourglass in the top left corner.

* Input Format

* There are 6 lines of input, where each line contains 6 space-separated integers that describe the 2D Array A.

* Constraints

* -9 <= A[i][j] <= 9
* 0 <= i,j <= 5

* Output Format

* Print the maximum hourglass sum in A. 

* Sample Input

* 1 1 1 0 0 0
* 0 1 0 0 0 0
* 1 1 1 0 0 0
* 0 0 2 4 4 0
* 0 0 0 2 0 0
* 0 0 1 2 4 0

* Sample Output

* 19
*/

const arr = [
    [0, -4, -6, 0, -7, -6],
    [-1, -2, -6, -8, -3, -1],
    [-8, -4, -2, -8, -8, -6],
    [-3, -1, -2, -5, -7, -4],
    [-3, -5, -3, -6, -6, -6],
    [-3, -6, 0, -8, -6, -7],
];

let biggestSum = null;

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        let sum =
            arr[i][j] +
            arr[i][j + 1] +
            arr[i][j + 2] +
            arr[i + 1][j + 1] +
            arr[i + 2][j] +
            arr[i + 2][j + 1] +
            arr[i + 2][j + 2];
        biggestSum = biggestSum === null ? sum : sum > biggestSum ? sum : biggestSum;
    }
}

console.log(biggestSum);
