// Lowest value go first in the array

function ReverseBubbleSort(arr) {
    l = arr.length

    for (let i = 1; i < l; i++){
        for (let j = l - 1; j > i; j--){
            if (arr[j] < arr[j-1]) {
                swapValue(arr, i, j) 
            }
        } 
    }

    console.log(arr)
}

function swapValue(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}


const arr = [1,7,5,3,8]

ReverseBubbleSort(arr);
