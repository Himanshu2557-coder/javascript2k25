function sumofdigits(x){
    let sum =0 
    while(x>0){
        let lastdigit = x%10
        sum += lastdigit
        x = Math.floor(x/10)
        
    }
    return sum
}
console.log(sumofdigits(123456))