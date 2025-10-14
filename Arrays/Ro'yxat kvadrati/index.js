function sortedSquares(nums){
   return nums.map((item) =>{return item*item}).sort((a,b) =>{return a - b})
}
console.log(sortedSquares([-4,-1,0,3,10]));


module.exports = {sortedSquares}