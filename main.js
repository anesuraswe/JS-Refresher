// console.log("Hello from Main.js")

// CONDITIONAL STATEMENTS

// const num = 5;

// if (num % 2 == 0) {
//   console.log("Positive");
// }
// else
//   console.log("Negative")

// const color = "redy"

// switch(color) {
//   case 'red':
//     console.log("The color is red")
//     break
//   case 'green':
//     console.log("The color is green")
//     break
//   case 'yellow':
//     console.log("The color is yellow")
//     break
//   default:
//     console.log("Out of range")
// }

// LOOPS
// for loop

// for (initializer; condition; final-expression) {
//   the code to be executed
// }

// for (let count = 0; count < 5; count++) {
//   console.log("Iteration number " + count);
// }

// While loop

// initializer
// while(condtion){
//   code to be run

//   final expression
// }

// let count = 1;
// while (count < 5) {
//   console.log("Iteration number " + count);
//   count++;
// }

// DO WHILE LOOP - runs the code at least once before evaluating the condition

// initializer
// do {
//   code to run

//   final-expression
// } while (condition)

// let count = 1;
// do {
//   console.log("Iteration number " + count);

//   count++;
// } while (count < 5);

// const numArray = [1, 2, 3, 4, 5];

// for (const num of numArray) {
//   console.log("Iteration number " + num);
// }

// FUNCTIONS

// function greet(city) {      // city is a parameter
//   console.log("Hello " + city);
// }

// greet("Gweru");         // Gweru, Harare & Masvingo are called argumets
// greet("Harare");
// greet("Masvingo");

// function addFunction(num1, num2) {
//   return num1 + num2;
// }

// const sum = addFunction(2, 3);
// console.log(sum);

// ARROW FUNCTIONS

// const addFunction = (num1, num2) => {
//   return num1 + num2;
// };

// const sum = addFunction(2, 3);
// console.log(sum);

// SCOPE
// 1. Block Scope
// if (true) {
//   const myName = "Anesu"; // let & const variables can only be acceses from within the code block they are declared in
//   console.log(myName);
// }

// Function Scope
// function myFunction() {
//   const myName = "Deloris"; // let & const variables can only be acceses from within the function they are declared in
//   console.log(myName);
// }

// myFunction();

// Global Scope

const myNum = 23;

if (true) {
  const myName = "Anesu";
  console.log(myName);
  console.log(myNum);
}

function myFunction() {
  const myName = "Deloris"; // let & const variables can only be acceses from within the function they are declared in
  console.log(myName);
  console.log(myNum);
}
myFunction();

// The global scope is the outermost scope in JavaScript. Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.
// Note that the myName variables are different in the function and the if code block, meaning that they are not the same variable, even though they have the same name. This is because they are declared in different scopes.
