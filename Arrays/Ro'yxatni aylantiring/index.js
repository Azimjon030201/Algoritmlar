function rotate(nums, k){
    for (let i = 0; i < k; i++) {
        let last = nums.pop()
        nums.unshift(last)
        
    }
    return nums;

}
console.log(rotate([1,2,3,4,5,6,7],3));

module.exports = {rotate}