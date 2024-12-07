import React from 'react'


// unshift()
// Adds one or more elements to the beginning of an array.

const unshiftMethod = () => {

    const arr = Array(1,2,3,4,5);
    const newArray = arr.unshift(9,8,7)

    // unshift can take mutiple element as param.
    //this output of arr will be [9,8,7,1,2,3,4,5]

    
  return (
    <div>unshift Method</div>
  )
}

export default unshiftMethod



// The unshift() method adds one or more elements to the beginning of an array and returns the new 
// length of the array.


// unshift() Syntax
// The syntax of the unshift() method is:

// arr.unshift(element1, element2, ..., elementN)
// Here, arr is an array.

// unshift() Parameters
// The unshift() method takes in an arbitrary number of elements to add to the array.

// unshift() Return Value
// Returns the new (after adding arguments to the beginning of array) length of the array upon which the method was called.
