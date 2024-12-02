/*Given an array of integers arr[] representing a permutation, implement the next permutation that rearranges the numbers into the lexicographically next greater permutation. If no such permutation exists, rearrange the numbers into the lowest possible order (i.e., sorted in ascending order). 

Note - A permutation of an array of integers refers to a specific arrangement of its elements in a sequence or linear order.

Examples:

Input: arr = [2, 4, 1, 7, 5, 0]
Output: [2, 4, 5, 0, 1, 7]
Explanation: The next permutation of the given array is {2, 4, 5, 0, 1, 7}.*/


class Solution {
    nextPermutation(arr) {
        let n = arr.length;
    
    // Step 1: Find the pivot - the first decreasing element from the end
    let pivot = -1;
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] < arr[i + 1]) {
            pivot = i;
            break;
        }
    }

    // If no pivot is found, the array is in descending order. Just reverse the entire array.
    if (pivot === -1) {
        arr.reverse();
        return;
    }

    // Step 2: Find the successor - the smallest element larger than arr[pivot] from the end
    let successor = -1;
    for (let i = n - 1; i > pivot; i--) {
        if (arr[i] > arr[pivot]) {
            successor = i;
            break;
        }
    }

    // Step 3: Swap the pivot and successor
    [arr[pivot], arr[successor]] = [arr[successor], arr[pivot]];

    // Step 4: Reverse the subarray from pivot + 1 to the end
    let left = pivot + 1;
    let right = n - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    }
}
