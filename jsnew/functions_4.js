function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5
console.log(multiply(5, 2)); // 10


console.log("--------------------------------")


function add(a, b=5,c){
    console.log(a)
    console.log(b)
    console.log(c)
    return a+b+c
}
console.log(add(10,55,3))