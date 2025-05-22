let x = 2;
let y = 3;
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x**y)

let  z= 10
z += 5
console.log(z)
// same goes for all ...........

// logical operators
let age = 20;
let isStudent = true;

// Logical AND (&&)
if (age > 18 && isStudent) {
  console.log("Adult student"); // This will be printed
}

// Logical OR (||)
if (age < 18 || isStudent) {
  console.log("Either underage or a student"); // This will be printed
}

// Logical NOT (!)
if (!isStudent) {
  console.log("Not a student");
} else {
  console.log("Is a student"); // This will be printed
}
