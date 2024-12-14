/*Given a string s consisting of lowercase Latin Letters. Return the first non-repeating character in s. If there is no non-repeating character, return '$'.
Note: When you return '$' driver code will output -1.

Examples:

Input: s = "geeksforgeeks"
Output: 'f'
Explanation: In the given string, 'f' is the first character in the string which does not repeat.*/

function firstNonRepeatingCharacter(s) {
    // Step 1: Create a frequency map
    const charFrequency = {};

    // Step 2: Count the frequency of each character
    for (const char of s) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }

    // Step 3: Find the first character with a frequency of 1
    for (const char of s) {
        if (charFrequency[char] === 1) {
            return char;
        }
    }

    // Step 4: If no non-repeating character is found, return '$'
    return '$';
}

// Example Usage
const input = "geeksforgeeks";
const result = firstNonRepeatingCharacter(input);

console.log(result); // Output: 'f'
