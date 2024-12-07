import React from "react";

/*
Array.of()
Creates a new array instance with a variable number of elements passed as arguments.
*/

const ArrayOfFunction = () => {
  const newArr = Array.of(1, 2, 3, 4, 5);
  console.log("Example of method of() in Array", newArr);

  return <div>Array Of Function</div>;
};

export default ArrayOfFunction;
