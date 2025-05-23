// IN JS  FUNCTIONS ARE FIRST CLASS CITIZEN
// IN JS FUNCTIONS CAN BE RETUREND FROM A FXN AND FXN CAN BE PASSED AS AN ARGUMENT TO ANOTHER FXN
function somefunction(){
    return function x(){
        return 10
    }
}
console.log("___________________________--")

function anotherfunction(f1){
    f1()
    console.log("called f1")
}
function hello(){
    console.log(`hello`)
}
anotherfunction(hello)
