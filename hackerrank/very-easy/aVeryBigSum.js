/* 
* Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

* aVeryBigSum has the following parameter(s):

* int ar[n]: an array of integers .
* Return

* long: the sum of all array elements
*/

ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(ar) {
    let sum = BigInt(0);
    for (let i = 0; i < ar.length; i++) {
        sum += BigInt(ar[i]);
    }
    return sum;
}

console.log(aVeryBigSum(ar));
