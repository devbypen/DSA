//1. Go through the array value by value from the start
//2. compare each value to check if it is equal to the value we are looking for
//3. If the value is found, return the index of that value
//4. If the end of the array is reached and the value is not found, return -1
//to indicate that value was not found

function linearSearch(arr, target) {
    for (i in arr) {
        if (arr[i] === target) {
            return i
        }
    }

    return -1
}

const arr = [3,7,5,6,-1]
target = 7

result = linearSearch(arr, target)
console.log('Find', target,'in slot', result)

//Time Complexity: O(n)
