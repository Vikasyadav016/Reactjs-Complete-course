import React, { useEffect, useState } from "react";

const CountVowels = () => {
  const [noOfVowels, setNoOfVowels] = useState(0); // Initialize state with 0
  const [inputField, setInputField] = useState("");

  const vowels = ["a", "e", "i", "o", "u"];

  const findNumberOfVowels = (inputString) => {
    let count = 0;
    const splited = inputString.toLowerCase().split(""); // Convert to lowercase and split into characters

    // Iterate over each character in the string
    splited.forEach((char) => {
      if (vowels.includes(char)) {
        count++; // Increment count if the character is a vowel
      }
    });
    return count; // Return the total count
  };

  useEffect(() => {
    if (inputField) {
      const vowelCount = findNumberOfVowels(inputField); // Example string
      setNoOfVowels(vowelCount); // Update state with the count
    }
  }, [inputField]);

  return (
    <div>
      <input
        type="text"
        name="inputField"
        value={inputField}
        onChange={(e) => setInputField(e.target.value)} // Update state on change
      />
      <h3>Number of Vowels: {noOfVowels}</h3>
    </div>
  ); // Display the count
};

export default CountVowels;
