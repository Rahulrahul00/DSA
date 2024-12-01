/*
Given an unsorted array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer. Do the mentioned change in the array in place.

Note: Consider the array as circular.

Examples :

Input: arr[] = [1, 2, 3, 4, 5], d = 2
Output: [3, 4, 5, 1, 2]
Explanation: when rotated by 2 elements, it becomes 3 4 5 1 2.
*/





class Solution {
    // Function to rotate an array by d elements in counter-clockwise direction.
    rotateArr(arr, d) {
        
        const n = arr.length;
        d %= n;
        let reverse = (start,end)=>{
            while(start < end){
                [arr[start],arr[end]] = [arr[end],arr[start]];
                
                start ++;
                end --;
            }
            
        }
           // Step 1: Reverse the first d elements
    reverse(0, d - 1);

    // Step 2: Reverse the remaining n-d elements
    reverse(d, n - 1);

    // Step 3: Reverse the entire array
    reverse(0, n - 1);
    }
}