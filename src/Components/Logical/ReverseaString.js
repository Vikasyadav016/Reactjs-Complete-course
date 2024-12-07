import React, { useState, useEffect } from "react";

const ReverseString = () => {
  const [inputString, setInputString] = useState(""); // State for user input
  const [reversedString, setReversedString] = useState(""); // State for the reversed string

  const reversedStringFun = (input) => {
    if (input) {
      const reversed = input.split("").reverse().join(""); // Correct the method name to 'reverse'
      console.log("Reversed:", reversed);
      setReversedString(reversed); // Update state with reversed string
    } else {
      setReversedString(""); // Clear the reversed string if input is empty
    }
  };

  useEffect(() => {
    reversedStringFun(inputString); // Call the function to update reversed string on input change
  }, [inputString]); // Dependency on inputString

  return (
    <div>
      <input
        type="text"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)} // Update input state on change
      />
      <h3>Reversed String: {reversedString}</h3>
    </div>
  );
};

export default ReverseString;
