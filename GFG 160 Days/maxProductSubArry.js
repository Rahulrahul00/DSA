/*Given an array arr[] that contains positive and negative integers (may contain 0 as well). Find the maximum product that we can get in a subarray of arr[].

Note: It is guaranteed that the output fits in a 32-bit integer.

Examples

Input: arr[] = [-2, 6, -3, -10, 0, 2]
Output: 180
Explanation: The subarray with maximum product is {6, -3, -10} with product = 6 * (-3) * (-10) = 180.*/

function maxProductSubarray(arr) {
    if (arr.length === 0) return 0; // Edge case: empty array

    let max_product = arr[0];
    let curr_max = arr[0];
    let curr_min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < 0) {
            // Swap curr_max and curr_min if current element is negative
            [curr_max, curr_min] = [curr_min, curr_max];
        }

        // Update curr_max and curr_min
        curr_max = Math.max(arr[i], curr_max * arr[i]);
        curr_min = Math.min(arr[i], curr_min * arr[i]);

        // Update global maximum product
        max_product = Math.max(max_product, curr_max);
    }

    return max_product;
}

// Example usage
let arr = [2, 3, -2, 4, -1];
console.log(maxProductSubarray(arr)); // Output: 48
