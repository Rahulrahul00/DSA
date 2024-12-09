/*Given an array of integers arr[] in a circular fashion. Find the maximum subarray sum that we can get if we assume the array to be circular.

Examples:

Input: arr[] = [8, -8, 9, -9, 10, -11, 12]
Output: 22
Explanation: Starting from the last element of the array, i.e, 12, and moving in a circular fashion, we have max subarray as 12, 8, -8, 9, -9, 10, which gives maximum sum as 22.*/

function maxCircularSubarraySum(arr) {
    // Helper function to find the maximum subarray sum using Kadane's Algorithm
    function kadane(array) {
      let maxEndingHere = array[0];
      let maxSoFar = array[0];
      for (let i = 1; i < array.length; i++) {
        maxEndingHere = Math.max(array[i], maxEndingHere + array[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
      }
      return maxSoFar;
    }
  
    // Helper function to find the minimum subarray sum using a modified Kadane's Algorithm
    function kadaneMin(array) {
      let minEndingHere = array[0];
      let minSoFar = array[0];
      for (let i = 1; i < array.length; i++) {
        minEndingHere = Math.min(array[i], minEndingHere + array[i]);
        minSoFar = Math.min(minSoFar, minEndingHere);
      }
      return minSoFar;
    }
  
    // Calculate total sum of the array
    const totalSum = arr.reduce((sum, num) => sum + num, 0);
  
    // Find the normal maximum subarray sum
    const normalMax = kadane(arr);
  
    // Find the minimum subarray sum
    const minSubarraySum = kadaneMin(arr);
  
    // Find the circular maximum subarray sum
    const circularMax = totalSum - minSubarraySum;
  
    // If all elements are negative, return the normal max as circular max won't make sense
    if (normalMax < 0) return normalMax;
  
    // Return the maximum of the normal and circular cases
    return Math.max(normalMax, circularMax);
  }
  
  // Example usage
  const arr = [8, -8, 9, -9, 10, -11, 12];
  console.log(maxCircularSubarraySum(arr)); // Expected Output: 22
  