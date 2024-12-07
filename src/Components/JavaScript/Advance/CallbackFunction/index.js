/*
Callback Function Concept in JavaScript

A callback function is a function that is passed as an argument to another 
function and is executed after the completion of that function. 

The purpose of a callback is to allow a function to be executed at a later time or after 
some asynchronous operation, like reading a file, making an HTTP request, or a setTimeout.

In JavaScript, callbacks are an essential part of handling asynchronous behavior 
(such as I/O operations, events, etc.). 

Callback functions are executed once the main operation has finished its execution.

*/

/*

Key Characteristics of Callback Functions:
Asynchronous or Synchronous: Callback functions can be synchronous (executed immediately) or 
asynchronous (executed after some time).

Passed as Arguments: Callbacks are usually passed to functions as arguments.

Control Flow: They allow you to control the flow of execution and manage operations that take 
time (e.g., fetching data, animations, etc.).

*/

const DisplayName = (name) => {
  console.log(name);
};

const ParentFunction = (callBackFunction) => {
  console.log("After this console callback function will be called out.");
  callBackFunction("Vikas Kumar"); //this function is a callback function.
};

ParentFunction(DisplayName); /// here DisplayName is passed as a callback function.

/// here ParentFunction is a Higher order function.

/*
Example of an Asynchronous Callback

Asynchronous callbacks are used when you have a function that doesn't complete immediately 
and you want to perform a task once it's finished. A common use case is with functions like 
setTimeout(), HTTP requests, or reading files in Node.js.

*/

const ExampleOfAsynchronousCallback = () => {
  setTimeout(() => {
    console.log("This is example of asynchronous callback function.");
  }, 1000);
};

/*

Why Use Callbacks?
Callbacks are used in many situations, including:

Handling Asynchronous Operations: Most I/O operations (such as reading files, HTTP requests, or timers) 
are asynchronous, so callbacks allow you to continue working on other tasks while waiting for the 
asynchronous operation to complete.

Event Handling: In browsers, event handlers (like click or mouseover) are callback functions that are 
executed when the event is triggered.

Customizing Behavior: Callbacks allow you to pass in custom behavior that will be executed within 
another function.

*/

/*

Callback Hell (Pyramid of Doom)
One drawback of using callbacks is callback hell, which happens when you nest multiple callbacks 
inside each other. This results in deeply nested code that is hard to read and maintain.

*/

// Nesting of callback function causes Callback Hell also known as Pyramid of Doom.

//Example of Callback Hell:

const ParentFunctionV = (email) => {
  ExecuteFirstCallbackFunction(() => {
    if (email) {
      console.log("data", email);
    } else {
      ExecuteSecondCallbackFunction((xyz) => {
        if (xyz) {
          console.log("xyz", xyz);
        } else {
          ExecuteThirdCallbackFuction((vikas) => {
            if (vikas) {
              console.log("vikas");
            } else {
              ExecuteFourthCallbackFuction();
            }
          });
        }
      });
    }
  });
};

/*

Why it's problematic:

The code becomes deeply nested and hard to maintain.
Each function is waiting for the previous one to complete before executing, 
which can become difficult to track.

*/

/*

Solutions to Callback Hell:

Promises: Promises were introduced in JavaScript to make handling asynchronous code easier by 
allowing chaining of .then() and .catch() methods instead of deeply nested callbacks.

Async/Await: With the introduction of async/await in ES2017, asynchronous code has become even 
more readable and easier to manage, making it look almost like synchronous code.

*/

/*
Callback vs. Promises vs. Async/Await:

Callbacks are best suited for simple use cases where there’s only one async operation.

Promises are more powerful and cleaner for chaining multiple asynchronous operations.

Async/Await provides the most readable and modern approach for handling async code in JavaScript, 
resembling synchronous code, but without blocking the execution.

////////////////////////

Conclusion
A callback function is a fundamental concept in JavaScript that allows you to execute code after 
an operation completes. While callbacks are powerful, they can lead to callback hell in complex 
asynchronous operations, which can be mitigated by using Promises or async/await for better readability
and maintainability.



*/
