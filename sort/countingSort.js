//1. Create a new array for couting how many there are of the different values.
//2. Go through the array that needs to be sorted.
//3. For each value, count it by increasing the counting array at the corresponding index
//4. After couting the values, go through the couting array to create the sorted array
//5. For each count in the couting array, create the correct number of elemnts,
//with value that crrespond to the couting array index
//
// Conditions for Counting Sort:
// 1. Interger values
// 2. Non nagative values
// 3. Limited range of values
//
function countingSort(arr) {
    const max = Math.max(...arr);

    const countArray = new Array(max + 1).fill(0)

    for (let i = 0; i < arr.length; i++) {
        countArray[arr[i] - 1] += 1
    }
    
    arr.length = 0;

    for (let i = 0; i < countArray.length; i++) {
        for (let j = 0; j < countArray[i]; j ++) {
            arr.push(i+1)
        }
    }
}

const a = [1,6,3,5,4]
countingSort(a)
console.log("sorted array:", a)

//best case: O(n)
//worst case: 0(n^2)
//general: O(n+k)
