import React, { useEffect, useState } from "react";

// A palindrome is a string that reads the same backward as forward.
// Example:
// Input: "racecar"
// Output: true

const PalindromeChecker = () => {
  const [isPalindrom, setIsPalinDrom] = useState(false);
  console.log("isPalindrom", isPalindrom);
  const [checkPalindrom, setCheckPalindrom] = useState();
  const calculatePalindromChecker = (xyz) => {
    const reversed = xyz.split("").reverse().join("");
    if (xyz === reversed) {
      setIsPalinDrom(true);
    } else {
      setIsPalinDrom(false);
    }
  };
  useEffect(() => {
    if (checkPalindrom) {
      calculatePalindromChecker(checkPalindrom);
    }
  }, [checkPalindrom]);
  return (
    <div>
      Palindrome Checker
      <input
        type="text"
        name="checkPalindrom"
        value={checkPalindrom}
        onChange={(e) => setCheckPalindrom(e.target.value)}
      />
      <h3>
        Palindrome :{" "}
        {isPalindrom ? "Yes, It is a Palindrom " : "No, It is not a Palindrom"}
      </h3>
    </div>
  );
};

export default PalindromeChecker;
