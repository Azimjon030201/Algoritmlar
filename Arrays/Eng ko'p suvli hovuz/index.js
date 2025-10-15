function maxArea(nums){
    // pass
    let start = 0
    let end = nums.length - 1
    let max = 0
    while (start < end) {
        let distance = end - start
        if(nums[start] <= nums[end]){
            if(max < distance*nums[start]){
                max = distance*nums[start]
            }
            start++
        }else{
            if(max < distance*nums[end]){
                max = distance*nums[end]
            }
            end--
        }
    }
    return max
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));


module.exports = {maxArea}