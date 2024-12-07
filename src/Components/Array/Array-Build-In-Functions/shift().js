import React from "react";

// shift()
// Removes the first element from an array and returns it.

const shiftMethod = () => {
  const arr = Array(1, 2, 3, 4, 5);

  const newarray = arr.shift();

  //output of newarray is [2,3,4,5]
  console.log("shift method", newarray);
  return <div>shift()</div>;
};

export default shiftMethod;


// The shift() method removes the first element from an array and returns that element.


// shift() Return Value
// Removes the first element from array and returns that value.
// Returns undefined if the array is empty.
// After removing the element at the 0th index, it shifts other values to consecutive indexes down.