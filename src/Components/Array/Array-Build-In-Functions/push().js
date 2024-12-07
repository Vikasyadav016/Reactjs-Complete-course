import React from "react";

/*
push()
Adds one or more elements to the end of an array.
*/
// arr.push(...items) – adds items to the end,

const pushMethod = () => {
  let originalArray = Array(1, 2, 3, 4, 5);

  originalArray.push(6);
  originalArray.push(7);
  return <div>push()</div>;
};

export default pushMethod;

/*
push() Syntax
The syntax of the push() method is:

arr.push(element1, element2, ..., elementN)
Here, arr is an array.

push() Parameters
The push() method takes in an arbitrary number of elements to add to the array.

Notes:

This method changes the original array and its length.
To add elements to the beginning of an array, use the JavaScript Array unshift() method.

*/
