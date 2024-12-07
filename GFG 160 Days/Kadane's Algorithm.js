/*
Given an integer array arr[]. You need to find the maximum sum of a subarray.

Examples:

Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
Output: 11
Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.
*/




class Solution {
    // Function to find the sum of contiguous subarray with maximum sum.
    maxSubarraySum(arr) {
        let currentMax = arr[0];
        let globalMax = arr[0];
        
        for(let i=1; i < arr.length; i++){
            
            // Update currentMax: Include the current element or start a new subarray
            currentMax = Math.max(arr[i], currentMax + arr[i]);
            
             // Update globalMax if the new currentMax is greater
             globalMax = Math.max(globalMax, currentMax); 
            
        }
        
        return globalMax;
    }
}