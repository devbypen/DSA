//1. Take the first value from unsorted part of the array
//2. Move the value into the correct place in the sorted part of the array
//3. Go through the unsorted part of the array again as many times as there are values

function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let insertIndex = i
        let value = arr.splice(i, 1)[0]
        for (let j = i - 1; j >= 0; j--) {
            if (value < arr[j]) {
                insertIndex = j
            }
        }

        arr.splice(insertIndex, 0, value)
    }

    console.log(arr);
}
//function InsertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//       for (let j = 0; j < i; j ++) {
//            if (arr[j] >  arr[i]){
//                SwapValue(arr, i, j)
//            }
//       }
//   }
//
//    console.log(arr)
//}

function SwapValue(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

//const a = [1,4,19,8,7,23,63,2]
//const a = [64, 34, 25, 12, 22, 11, 90, 5]
//const a = [64, 34, 25, 12]
const a = [5, 3, 4, 1, 2];

InsertionSort(a)
