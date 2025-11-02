//1. Start with the least significant digit (rightmost digit)
//2. Sort the values based on the digit in focus by first putting the values in
// the correct bucket based on the digit in focus, and then put them back into 
// array in the correct order
// 3. Move the next digit and sort again like in the step above, until there 
// are no digits left.i

function radixSort(arr) {
    const radixArray = Array.from({length: 10}, () => []);

    const maxValue = Math.max(...arr);

    let divided = 1

    while (Math.floor(maxValue / divided) > 0){
        for (let i = 0; i < arr.length; i++) {
            const indexBucket = Math.floor((arr[i] / divided) % 10);
            radixArray[indexBucket].push(arr[i]);
        }

        arr.length = 0;

        for (let i = 0; i < radixArray.length; i++) {
            for (const value of radixArray[i]) {
                    arr.push(value)
            }
            radixArray[i] = [];
        }
        divided *= 10;
    }
}

const a = [24, 33, 19, 1, 65, 78, 14];
radixSort(a);
console.log('Sorted array:', a);
