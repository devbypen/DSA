// 1. Assign minIndex = 0, find the min value
// 2. remove current slot + add to the arr[minIndex] slot
// 3. keep doing to finish
// To boost performance, instead of remove and add (shift all index left)
// we can use change the position between curren minIndex and position of minValue

function SelectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        SwapValue(arr, i, minIndex)

        //const minValue = arr.splice(minIndex, 1)[0]
        //arr.splice(i, 0, minValue)
    }
    console.log(arr)
}

function SwapValue (arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}
const a = [1,6,8,23,2,17,13,22,4];

SelectionSort(a)
