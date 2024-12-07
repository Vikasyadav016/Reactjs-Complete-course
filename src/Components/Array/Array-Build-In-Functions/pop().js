import React from "react";

// pop()
// Removes the last element from an array and returns it.

const popMethod = () => {
  const arr = ["1", "2", "3", "4", "5"];

  arr.pop();

//   output will be ["1","2","3","4"]
  return <div>pop Method</div>;
};

export default popMethod;


// The pop() method removes the last element from an array and returns that element.

// pop() Syntax
// The syntax of the pop() method is:

// arr.pop()
// Here, arr is an array.

// pop() Return Value
// Removes the last element from array and returns that value.
// Returns undefined if the array is empty.