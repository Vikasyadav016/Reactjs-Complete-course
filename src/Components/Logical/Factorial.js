import React, { useEffect, useState } from "react";



// what is factorial
// Factorial is a mathematical operation that multiplies a positive integer by all the positive integers below it, down to 1. The factorial of a number 
// 𝑛
// n is denoted as 
// 𝑛
// !
// n!.

const Factorial = () => {
  const [factorial, setFactorial] = useState(0);
  const [number, setNumber] = useState(0);
  console.log("factorial", factorial);

  const calculateFactorial = (number) => {
    //let suppose number is 5;
    //then factorial of number 5 is 5*4*3*2*1 = 120
    let fact = 1;
    if (number === 0 || number === 1) {
      return (fact = 1);
    } else {
      for (let index = 1; index <= number; index++) {
        fact = fact * index;
        console.log("fact", fact);
      }
    }
    setFactorial(fact);
    return fact;
  };


  //using recursion factorial calculation

//   const calculateFactorial = (num) => {
//     if (num === 0 || num === 1) {
//       return 1; // Base case: 0! and 1! both equal 1
//     }
//     return num * calculateFactorial(num - 1); // Recursive case
//   };

  useEffect(() => {
    if (number) {
      calculateFactorial(number);
    }
  }, [number]);
  return (
    <div>
      Calculate factorial of :-{" "}
      <input
        type="number"
        name="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2>Factorial is: {factorial}</h2>
    </div>
  );
};

export default Factorial;
