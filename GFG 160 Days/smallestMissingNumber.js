/*You are given an integer array arr[]. Your task is to find the smallest positive number missing from the array.

Note: Positive number starts from 1. The array can have negative integers too.

Examples:

Input: arr[] = [2, -3, 4, 1, 1, 7]
Output: 3
Explanation: Smallest positive missing number is 3*/


function findSmallestMissingPositive(arr) {
    const n = arr.length;

    // Step 1: Segregate non-positive numbers
    let j = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] <= 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap negative numbers to the left
            j++;
        }
    }

    // Now arr[j..n-1] contains only positive numbers
    const positiveArr = arr.slice(j);

    // Step 2: Mark positions
    for (let i = 0; i < positiveArr.length; i++) {
        const absValue = Math.abs(positiveArr[i]);
        if (absValue - 1 < positiveArr.length && positiveArr[absValue - 1] > 0) {
            positiveArr[absValue - 1] = -positiveArr[absValue - 1];
        }
    }

    // Step 3: Find the first unmarked index
    for (let i = 0; i < positiveArr.length; i++) {
        if (positiveArr[i] > 0) {
            return i + 1; // Missing number found
        }
    }

    // If all indices are marked, return the next number
    return positiveArr.length + 1;
}

// Example Usage:
const arr = [2, -3, 4, 1, 1, 7];
console.log(findSmallestMissingPositive(arr)); // Output: 3
