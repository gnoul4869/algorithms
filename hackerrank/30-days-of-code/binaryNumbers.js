/*
 * Task
 * Given a base-10 integer, n, convert it to binary (base-2). Then find and print the base-10 integer denoting the maximum number of consecutive 1's in n's binary representation. When working with different bases, it is common to show the base as a subscript.
 *
 * Example
 * n = 125
 * The binary representation of 125 is 1111101. In base 10, there are 5 and 1 consecutive ones in two groups. Print the maximum, 5.
 *
 * Input Format
 *
 * A single integer, n.
 *
 * Constraints: 1 <= n <= 10^6
 *
 * Output Format
 *
 * Print a single base-10 integer that denotes the maximum number of consecutive 1's in the binary representation of n.
 */

let n = 6;
let base2 = '';

while (n > 0) {
    let reminder = n % 2;
    n = Math.floor(n / 2);
    base2 += reminder;
}

const splitedArray = base2.split(0);
const result =
    splitedArray.length === 1
        ? splitedArray[0].length
        : splitedArray.reduce((a, b) => (a > b.length ? a : b.length), 0);

console.log(result);
