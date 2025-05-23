function printfibonaci(n){
    if(n==0){
        console.log(0)
        return
    }
    if(n>=1){
        console.log(0)
        console.log(1)
    }
    let last = 1
    let secondlast =0 
    for( let i=2;i<=n ;i++){
        let ans = last + secondlast
        console.log(ans)
        secondlast = last
        last = ans 
    } 

}

printfibonaci(10)