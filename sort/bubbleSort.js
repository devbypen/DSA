//The highest value is go up
//Some arr have sorted when first run, so need to check swapped = false => end
const n = [3,4,2,1,6,8,3,4,9]

function BubbleSort(arr){
    for (let i = 1; i < arr.length; i++) {
        let swapped = false
        for (let j = 1; j < arr.length - i; j++) {
            if (arr[j-1] > arr[j]) {
                swap(arr, j-1, j)
                swapped = true
            }  
        }

        if (!swapped) {
            break
        }
    }

    console.log(n)
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
};

BubbleSort(n);
