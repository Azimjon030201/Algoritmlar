function moveZeroes(nums){
    let start = 0
    let end = nums.length - 1
    
    
    while(start<end){
        if(nums[end]== 0){
            end--
        }
        if(nums[start] == 0){
            let change = nums[end]
            nums[end] = nums[start]
            nums[start] = change; 
            end--
        }
        start++

    }
    return nums
}
console.log(moveZeroes([0,1,0,3,12]));

module.exports = {moveZeroes}