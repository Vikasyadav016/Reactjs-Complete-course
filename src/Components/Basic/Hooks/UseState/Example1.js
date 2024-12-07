import React, { useState } from "react";

const Example1 = () => {
  const [counter, setCounter] = useState(0);
console.log("Counter-1",counter);
  const increment = () => {
    setCounter(counter + 1);
    console.log("Counter-2",counter);
    setCounter(counter + 1);
    console.log("Counter-3",counter);
  };

  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Example1;
