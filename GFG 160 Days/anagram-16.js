/*Given two strings s1 and s2 consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, "act" and "tac" are an anagram of each other. Strings s1 and s2 can only contain lowercase alphabets.

Note: You can assume both the strings s1 & s2 are non-empty.

Examples :

Input: s1 = "geeks", s2 = "kseeg"
Output: true
Explanation: Both the string have same characters with same frequency. So, they are anagrams.*/

function areAnagrams(s1, s2) {
    // Check if the lengths of the strings are different
    if (s1.length !== s2.length) {
        return false;
    }

    // Create a frequency map for the first string
    const frequencyMap = {};

    for (const char of s1) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    // Check the characters in the second string against the frequency map
    for (const char of s2) {
        if (!frequencyMap[char]) {
            return false; // Character not found or frequency doesn't match
        }
        frequencyMap[char]--;
    }

    return true; // Strings are anagrams
}

// Example usage
const s1 = "geeks";
const s2 = "kseeg";

console.log(areAnagrams(s1, s2)); // Output: true
