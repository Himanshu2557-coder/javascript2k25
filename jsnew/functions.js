// 1. Function to greet a user
function greetUser(name) {
    console.log("Hello, " + name + "!");
  }
  
  // 2. Function to add two numbers
  function addNumbers(a, b) {
    return a + b;
  }
  
  // 3. Function to check if a number is even or odd
  function isEven(number) {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  // 4. Function to find the largest number in an array
  function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    return max;
  }
  
  // 5. Function to reverse a string
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Example calls to see the functions in action
  greetUser("Alice");
  console.log("Sum:", addNumbers(5, 7));
  console.log("Is 4 even?", isEven(4));
  console.log("Max number:", findMax([3, 8, 1, 6, 9]));
  console.log("Reversed string:", reverseString("hello"));
  