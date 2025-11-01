//1. choose a value in the array to be the pivot element (last value)
//2. order the rest of the array so that lower values than the pivot element
//are on the left, and higher values are on the right.
//3. Swap the pivot element with the first element of the higher values so that
//the pivot element lands in between the lower and higher values.
//4. Do the same operations(recursively) for the sub-arrays on the left and 
//right side of the pvot element
function partition(arr, low ,high) {
    const pivot = arr[high];
    let indexCheck = low - 1;

    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            indexCheck += 1;
            if (indexCheck < i) {
                swapValue(arr, i, indexCheck)
            }
        }
    }
    swapValue(arr, indexCheck + 1, high)

    return indexCheck + 1
}

function swapValue(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pi = partition(arr, low, high);

        quickSort(arr, low, pi -1);
        quickSort(arr, pi + 1, high);
    }
}

const a = [10,7,8,9,1,5];
quickSort(a);
console.log("Sorted array:", a);
