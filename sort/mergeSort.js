//1. Divide the unsorted array into two sub-arrays, half the size of the original
//2. Continue to divide the sub-arrays as long as the current piece of the array 
//has more than one element
//3. Merge two sub-arrays together by always putting the lowest value first
//4. Keep merging untl there are no sub-arrays lefti

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    };
    const midIndex = Math.floor(arr.length / 2);
    
    const sortedLeft = mergeSort(arr.slice(0, midIndex));
    const sortedRight = mergeSort(arr.slice(midIndex));
    
    return merge(sortedLeft, sortedRight)
}

function merge(arrLeft, arrRight) {
    const mergedArr = [];
    let i = j = 0;

    while (i < arrLeft.length && j < arrRight.length) {
        if (arrLeft[i] < arrRight[j]) {
            mergedArr.push(arrLeft[i]);
            i += 1;
        } else {
            mergedArr.push(arrRight[j]);
            j +=1;
        }
    }

    mergedArr.push(...arrLeft.slice(i));
    mergedArr.push(...arrRight.slice(j));

    return mergedArr;
}

unsortedArr = [3,7,6,-10,15,23.5,55,-13];
sortedArr = mergeSort(unsortedArr);
console.log("Sorted array: ", sortedArr);

//Time Complexity: O(nlogn)
