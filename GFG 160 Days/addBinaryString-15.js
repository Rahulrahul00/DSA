/*Given two binary strings s1 and s2 consisting of only 0s and 1s. Find the resultant string after adding the two Binary Strings.
Note: The input strings may contain leading zeros but the output string should not have any leading zeros.

Input: s1 = "1101", s2 = "111"
Output: 10100
Explanation:
 1101
+ 111
10100*/


// Function to add two binary strings
function addBinaryStrings(s1, s2) {
    let i = s1.length - 1; // Pointer for s1
    let j = s2.length - 1; // Pointer for s2
    let carry = 0; // Carry for addition
    let result = ""; // To store the binary result

    // Loop until both strings are processed or there is a carry
    while (i >= 0 || j >= 0 || carry > 0) {
        const bit1 = i >= 0 ? parseInt(s1[i], 10) : 0; // Get bit from s1 or 0 if out of bounds
        const bit2 = j >= 0 ? parseInt(s2[j], 10) : 0; // Get bit from s2 or 0 if out of bounds

        const sum = bit1 + bit2 + carry; // Add bits and carry
        result = (sum % 2) + result; // Append the current bit to result
        carry = Math.floor(sum / 2); // Update carry

        i--; // Move to the next bit in s1
        j--; // Move to the next bit in s2
    }

    // Remove leading zeros in the result
    return result.replace(/^0+/, "") || "0"; // Ensure at least "0" for empty result
}

// Example usage
const s1 = "1101";
const s2 = "111";
console.log(addBinaryStrings(s1, s2)); // Output: 10100
