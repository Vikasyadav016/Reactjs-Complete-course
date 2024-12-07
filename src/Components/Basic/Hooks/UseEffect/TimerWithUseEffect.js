import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  console.log("tier-1", time);
  //below code dont stop after 10 seconds
  //because dependencies of useEffect not provided
//   useEffect(() => {
//     if (time < 10) {
//       const interval = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);

//       return () => clearInterval(interval);
//     }
//   }, []);

  //if we provide dependencies of useEffect then it will stop after a certain time.
  //like as below
  useEffect(() => {
      if (time < 5) {
        const interval = setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(interval);
      }
    }, [time]);

  return <div>Seconds: {time}</div>;
}
export default Timer;
