import React, { useEffect, useState } from "react";

// Write a function that generates the first n numbers of the Fibonacci sequence.
// The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding ones.
// The Fibonacci sequence is a series of numbers where each number is the sum of the two numbers that come before it:
// Example:
// Input: n = 5
// Output: [0, 1, 1, 2, 3]

// The Fibonacci sequence can be described mathematically as: xn = xn-1 + xn-2.

const FibonacciSequence = () => {
  const [number, setNumber] = useState([]);
  const calcuateFibonacciSequence = (number) => {
    let fs = [];
    if (number <= 0) return fs;
    if (number === 1) return [0];
    if (number === 2) return [0, 1];

    fs[0] = 0;
    fs[1] = 1;
    for (let index = 2; index < number; index++) {
      fs[index] = fs[index - 1] + fs[index - 2];
    }
    setNumber(fs);
    return fs;
  };

  useEffect(() => {
    calcuateFibonacciSequence(5);
  }, []);
  return (
    <div>
      Fibonacci Sequence
      <h3>FibonacciSequence is:- {number.join(", ")}</h3>
    </div>
  );
};

export default FibonacciSequence;
