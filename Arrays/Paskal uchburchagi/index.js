function generateRow(prev){
    let next = [1]
    for (let i = 0; i < prev.length - 1; i++) {
        next.push(prev[i] + prev[i+1])

        
    }
    next.push(1)
    return next
}
function generate(n){
    if(n == 0){
        return []
    }
    let row = [1]
    let result = [row]
    for (let i = 0; i < n; i++) {
        row  = generateRow(row)
        result.push(row)

        
    }
    return result

}
console.log(generate(5));

module.exports = {generate}