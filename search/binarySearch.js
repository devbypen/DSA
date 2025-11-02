// Binary search only work on sorted array
// 1. Check the value in the center of the array
// 2. If the target value is lower, search the left half of the array. If the
// value if higher, search the right half
// 3. Continue step 1 and 2 for the new reduced part of the array until the 
// target value is found or until the search area is empy
// 4. If the value is found, return the target value index. If the target value
// is not found, return -1

function binarySearch(arr, target){
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        mid = Math.floor((left+right) / 2);
        midValue = arr[mid];
        if (midValue === target) {
            return mid
        }

        if (target > midValue) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return -1
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 7;
const result = binarySearch(arr, target);
console.log('Find', target, 'in', result);

//Time Complexity: Log(2)n
