/*Implement Atoi
Difficulty: MediumAccuracy: 32.58%Submissions: 244K+Points: 4
Given a string s, the objective is to convert it into integer format without utilizing any built-in functions. Refer the below steps to know about atoi() function.

Cases for atoi() conversion:

Skip any leading whitespaces.
Check for a sign (‘+’ or ‘-‘), default to positive if no sign is present.
Read the integer by ignoring leading zeros until a non-digit character is encountered or end of the string is reached. If no digits are present, return 0.
If the integer is greater than 231 – 1, then return 231 – 1 and if the integer is smaller than -231, then return -231.
Examples:

Input: s = "-123"
Output: -123
Explanation: It is possible to convert -123 into an integer so we returned in the form of an integer*/


function myAtoi(s) {
    // Constants for 32-bit signed integer range
    const INT_MAX = 2 ** 31 - 1; // 2147483647
    const INT_MIN = -(2 ** 31); // -2147483648

    let i = 0; // Pointer to traverse the string
    let sign = 1; // Default to positive sign
    let result = 0; // Store the final integer result
    const n = s.length;

    // Step 1: Skip leading whitespaces
    while (i < n && s[i] === ' ') {
        i++;
    }

    // Step 2: Check for a sign
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // Step 3: Read digits and build the result
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0); // Convert character to integer

        // Step 4: Check for overflow
        if (result > Math.floor((INT_MAX - digit) / 10)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit; // Build the number
        i++;
    }

    // Step 5: If no valid digits were found, return 0
    if (result === 0) return 0;

    // Step 6: Return the final signed result
    return result * sign;
}
