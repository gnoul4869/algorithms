array = [1, 2, 4, 8, 123, 345, 43, 32, 63, 123, 43, 2, 55, 1, 234, 92, 12321];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

console.log(bubbleSort(array));
