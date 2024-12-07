import React from "react";

// For create an array in js
// Array()
// Creates a new array.
// const arr = new Array(3); // Creates an array with 3 empty slots.
// const arr2 = Array(1, 2, 3); // Creates an array with the values [1, 2, 3]

const ArrayCreation = () => {
  const newArray = new Array(5);
  console.log("Array", newArray);

  const arrayWithValue = new Array(1, 2, 3, 4, 5);
  console.log("Array with value",arrayWithValue);
  return <div>ArrayCreation</div>;
};

export default ArrayCreation;
