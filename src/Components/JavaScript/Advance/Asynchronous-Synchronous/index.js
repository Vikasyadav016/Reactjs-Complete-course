/*

Synchronous JavaScript

Synchronous operations are executed one at a time, in the order they appear in the code. 
Each task must complete before the next one begins. This means the program does not continue 
until the current operation finishes.

Key Characteristics of Synchronous Operations:

Blocking: Each task waits for the previous one to complete.
Execution Order: The tasks are executed in a sequence, one after another.
Easy to Understand: The flow of execution is straightforward because tasks are completed in the 
exact order they're written.

*/

/*

Drawbacks of Synchronous Code:

Blocking: If one operation is long-running (e.g., reading a large file, making a network request), 
it will block the subsequent operations until it completes. This could make the application unresponsive,
especially in cases where there is a need for user interaction or real-time updates.

Inefficient: If tasks depend on external resources, such as network calls or user input, 
waiting synchronously for each task can make the system inefficient.
*/

// Example of synchronous concept.

console.log("It will start from here."); // task 1

function dispayAdd(a, b) {
  return a + b;
}
const add = dispayAdd(2, 4);
console.log("It will print in second term", add); // task 2

console.log("End here."); // task 3

// According to Synchronous concept in javascript
// The code start execution from top.
//It will execute task 1 in above example first.
// and then execute task 2 and then task 3 .

// In Synchronous the task 2 will not start its execution untill the task 1 not complete its execution.
// and like this task 3 will not start execution untill task 1 and task 2 not completed its execution.

//Asynchornous concept

/*
Asynchronous JavaScript

Asynchronous operations, on the other hand, are executed in the background while the rest of 
the code continues to run. These tasks do not block the execution of other operations, 
allowing the program to remain responsive and efficient, especially in situations involving 
time-consuming tasks like fetching data or waiting for user input.

Key Characteristics of Asynchronous Operations:

Non-Blocking: The program can continue executing while waiting for an operation to complete.
Concurrency: Multiple asynchronous tasks can be initiated, and the results can be handled later when they're ready.
Callbacks, Promises, Async/Await: Asynchronous operations often involve mechanisms like callbacks, promises, or async/await to handle the result once the operation completes.
Example of Asynchronous Code:

*/

//Example of asynchronous concept

const ExampleOfAsynchronous = () => {
  console.log("In function first line will be This.");
  setTimeout(() => {
    console.log("This line will be print after 3 seconds.");
  }, 3000);
  console.log("This line will be printed before line in setTimeout function.");
};


