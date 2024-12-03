
class Solution {
    // Function to find the majority elements in the array
    findMajority(arr) {
        let n = arr.length;
        let feq = new Map();
        //count frequency of each element
        for(let ele of arr){
            feq.set(ele, (feq.get(ele) || 0)+1);
        }
        
        let res =[];
        for(let [ele,cnt] of feq){
            
            if(cnt > n/3){
                res.push(ele);
            }
        }
        
        return res.sort((a,b)=> a-b);
    }
}