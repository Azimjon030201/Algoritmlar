function sortedSquares(nums){
   // return nums.map((item) =>{return item*item}).sort((a,b) =>{return a - b})
   let start = 0
   let end = nums.length - 1
   let result = []
   while(start <= end){
      if(Math.pow(nums[start],2)>= Math.pow(nums[end],2)){
         result.unshift(Math.pow(nums[start],2))
         start++
      }else{
         result.unshift(Math.pow(nums[end],2))
         end--
      }
   }
   return result
}
console.log(sortedSquares([-4,-1,0,3,10]));


module.exports = {sortedSquares}