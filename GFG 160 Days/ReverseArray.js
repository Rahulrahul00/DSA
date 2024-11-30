
/*You are given an array of integers arr[]. Your task is to reverse the given array.

Examples:

Input: arr = [1, 4, 3, 2, 6, 5]
Output: [5, 6, 2, 3, 4, 1]
Explanation: The elements of the array are 1 4 3 2 6 5. After reversing the array, the first element goes to the last position, the second element goes to the second last position and so on. Hence, the answer is 5 6 2 3 4 1.*/

class Solution {
    // Function to reverse the array.
    reverseArray(arr) {
        let start = 0;
        let end = arr.length-1;
         
         while(start < end){
           let  temp = arr[start];
             arr[start] = arr[end];
             arr[end] = temp;
             
             start++;
             end--;
         }
    }
}

// Another method
class Solution{
    reverseArray(arr){
        for(let i=0; i<arr.length/2; i++){

            let temp = arr[i];
                arr[i] = arr[arr.length-1-i];
                arr[arr.length-1-i] = temp;
            
        }
    }
}

