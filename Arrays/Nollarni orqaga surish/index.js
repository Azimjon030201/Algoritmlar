function moveZeroes(nums){
    // let start = 0
    // let end = nums.length - 1
    
    
    // while(start<end){
    //     if(nums[end]== 0){
    //         end--
    //     }
    //     if(nums[start] == 0){
    //         let change = nums[end]
    //         nums[end] = nums[start]
    //         nums[start] = change; 
    //         end--
    //     }
    //     start++

    // }
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] == 0){
            count ++
            continue;
        }
        let temp = nums[i];
        nums[i] = nums[i - count]
        nums[i - count] = temp
        
        
    }
    return nums
}
console.log(moveZeroes([0,1,0,3,12]));

module.exports = {moveZeroes}