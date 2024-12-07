import React from "react";

/*
Array.from()
Creates a new array instance from an array-like or iterable object.

*/

const FromFunctionOfArray = () => {
  const str = "Vikas";
  const strConvertedinArray = Array.from(str);

  console.log("From method of Array", strConvertedinArray);
  //output of console will be ['V','i','k','a','s']
  return <div>FromFunctionOfArray</div>;
};

export default FromFunctionOfArray;
