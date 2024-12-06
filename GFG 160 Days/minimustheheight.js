/*Given an array arr[] denoting heights of N towers and a positive integer K.

For each tower, you must perform exactly one of the following operations exactly once.

Increase the height of the tower by K
Decrease the height of the tower by K
Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.

You can find a slight modification of the problem here.
Note: It is compulsory to increase or decrease the height by K for each tower. After the operation, the resultant array should not contain any negative integers.*/

class Solution {
    // Function to get the minimum difference between the heights.
    getMinDiff(arr, k) {
        if (arr.length === 1) return 0; // If there is only one tower, no difference

        // Sort the array
        arr.sort((a, b) => a - b);

        let n = arr.length;
        let ans = arr[n - 1] - arr[0]; // Initial difference between max and min

        let smallest = arr[0] + k;
        let largest = arr[n - 1] - k;

        // Iterate through the array
        for (let i = 0; i < n - 1; i++) {
            let minTower = Math.min(smallest, arr[i + 1] - k);
            let maxTower = Math.max(largest, arr[i] + k);

            // Update the answer with the current difference
            if (minTower >= 0) {
                ans = Math.min(ans, maxTower - minTower);
            }
        }

        return ans;
    }

}
