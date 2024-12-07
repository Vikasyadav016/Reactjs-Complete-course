/*
Promise Concept in JavaScript

A Promise in JavaScript is an object that represents the eventual completion (or failure) of an 
asynchronous operation and its resulting value. Promises allow you to handle asynchronous 
operations like network requests, file reading, or timers in a cleaner and more manageable way 
compared to traditional callback-based approaches (also known as "callback hell").

A Promise can be in one of the following states:

Pending: The operation is still in progress.
Fulfilled: The operation was successful, and the Promise has a resulting value.
Rejected: The operation failed, and the Promise has a reason (typically an error).

*/

/*

Syntax for Creating a Promise
You can create a new Promise using the Promise constructor. 
The constructor takes a single function (called the "executor") 
that contains two arguments: resolve and reject.

*/

const promise = new Promise((resove, reject) => {
  //asynchronous code here.

  let success = true;

  if (success) {
    resove("Operation is sccessfull.");
  } else {
    reject("Operation is completely failed.");
  }
});

/*

Handling Promise Results

To handle the result of a Promise, you can use the .then(), .catch(), and .finally() methods.

.then(): This method is called when the Promise is fulfilled (resolved).
.catch(): This method is called when the Promise is rejected (failed).
.finally(): This method is always executed, whether the Promise was fulfilled or rejected.

*/
//example of handling promise result.

promise
  .then((result) => {
    console.log("Opration output in successfull.", result);
  })
  .catch((failEdResult) => {
    console.log("Operaton output failed case.", failEdResult);
  })
  .finally((final) => {
    console.log("Operation output in finally case", final);
  });

//Example: Using a Promise to Simulate a Network Request

function simulateNetworkRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; // Randomly succeed or fail
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data");
      }
    }, 1000); // Simulate a 1 second network request
  });
}

simulateNetworkRequest()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

/*
    Conclusion:
Promises are an essential tool in JavaScript and React for handling asynchronous operations. 
They improve the management of async tasks by avoiding callback hell, offering cleaner syntax, 
and allowing for better error handling. In React, Promises are particularly useful for handling 
API requests, loading states, and other async side effects in components.

*/

/*

1. Promise.all vs Promise.race
Question:
What is the difference between Promise.all and Promise.race? Can you provide an example of each in a 
scenario where one is preferable over the other?

Explanation:

Promise.all: Waits for all promises to resolve (or for one to reject). If one promise rejects, 
all others are ignored, and the rejection reason is passed to the catch block.
Promise.race: Resolves or rejects as soon as the first promise resolves or rejects, regardless of 
the other promises.


*/

//Example of Promise.all and Promise.race

const promise1 = new Promise((resolve) => {
  setTimeout(() => console.log(resolve, 1000, "one"));
});
const promise2 = new Promise((resolve) => {
  setTimeout(() => console.log(resolve, 2000, "Two"));
});
const promise3 = new Promise((resolve) => {
  setTimeout(() => console.log(resolve, 3000, "Three"));
});

Promise.all([promise1, promise2, promise3])
  .then((result) => console.log("promise.all output", result))
  .catch((error) => console.log("promise.all error", error))
  .finally((finallyOutPut) => console.log("Finally output", finallyOutPut));

Promise.race([promise1, promise2, promise3])
  .then((value) => console.log("Out of promice.race", value))
  .catch((error) => console.log("error", error))
  .finally((final) => console.log("final", final));

//  The main difference between Promce.all and Promice.race is
//  Promise.all wait until all promise get resolved/or any one reject.
//  if All promise got successfully resolved then return success full out if any
//  promise got rejeced then all ingonred and catch will be printed.

// And in Promise.race will return only first if any promise got resove or reject first.

//---------------------

/*

Promise Chaining with Dynamic Data
Question:
Write a function that simulates fetching user data, updating it, and then logging the updated user data.
The function should chain multiple promises, ensuring each promise depends on the resolution of the 
previous one.

Explanation:
This tests a candidate’s ability to chain promises and handle data dependencies.

Solution:
*/

const fetchUserDetails = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: userId, name: "Vikas Kumar" });
    }, 1000);
  });
};

function updateUserData(userdata) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      (userdata.name = "Vikram Rathore"), resolve(userdata);
    }, 2000);
  });
}

const logUserData = (userData) => {
  console.log("log user data", userData);
};

const handleUserData = (userId) => {
  fetchUserDetails(userId)
    .then((userdata) => updateUserData(userdata))
    .then((user) => logUserData(user))
    .catch((error) => console.log("error in user data", error))
    .finally((final) => console.log("final output", final));
};

/*

Promise.finally Use Case
Question:
In a scenario where you make a network request and have some cleanup operations 
(like hiding a loading spinner), how would you use finally to execute the cleanup, 
regardless of success or failure?



*/

//Solution:

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = Math.random > 0.5;
      if (success) {
        resolve("Operation success");
      } else {
        reject("Operation failed");
      }
    }, 2000);
  });
}

const performCLeanNess = () => {
  console.log("Cleaning all");
};

fetchData()
  .then((data) => console.log("data", data))
  .catch((error) => console.log("Error", error))
  .finally((final) => {
    performCLeanNess();
    console.log("Cleaned", final);
  });

/*
Promise.allSettled
Question:
What does Promise.allSettled do? Write a function that demonstrates the usage of 
Promise.allSettled to handle a series of fetch requests, where you want to handle 
both fulfilled and rejected promises without causing the failure of other requests.

Explanation: 
Promise.allSettled waits for all promises to settle (either resolved or rejected), 
and it returns an array of objects describing the outcome of each promise.



  */

///Solution:

function fetchWithSetTimeOut(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.floor > 0.5) {
        resolve(`Fethced from ${ur}`);
      } else {
        reject(`Not Fetched ${url}`);
      }
    }, 2000);
  });
}

const urls = [
  "https://api.example1.com",
  "https://api.example2.com",
  "https://api.example3.com",
];

Promise.allSettled(urls.map((url) => fetchWithSetTimeOut(url))).then((data) => {
  data.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Success : ${result.value}`);
    } else {
      console.log(`Failed : ${result.reason}`);
    }
  });
});

/*

Simulate Delayed Resolution of a Promise
Question:
Write a function that simulates a delayed resolution of a Promise. You need to ensure 
that the Promise resolves after a given delay and logs "Done!" after that delay. 
The delay should be configurable.

*/

function delayedPromice(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, delay);
  });
}

delayedPromice(2000)
  .then((message) => console.log("message", message))
  .catch((Err) => console.log("Error", Err));

/*
  Promise Implementation of setTimeout
Question:
Implement a function that returns a Promise that resolves after a specified timeout 
(similar to setTimeout), but using Promises instead of a traditional callback.

Solution:

*/

function setTimeOutV(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

setTimeOutV(3000).then((message) => console.log("message", message));


//Promise drawbacks and benifits over callback function concept

/*
Benefits of Promises:

Avoids callback hell and improves code readability.
Simplifies error handling with .catch().
Provides better control over asynchronous operations (e.g., Promise.all, Promise.race).
Allows for cleaner asynchronous code using async/await.
Promotes better code composition and reusability.
*/

// Drawbacks of Promises:
// Slightly higher learning curve compared to callbacks.
// Can consume more memory in some cases.
// Transitioning between callback-based code and promise-based code can be complex in large codebases.