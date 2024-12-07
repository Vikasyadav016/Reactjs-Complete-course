import React, { useEffect } from "react";

const LifeCycleComponent = () => {
  //first phase of lifecycle method in functional component.
  useEffect(() => {
    //some code here.
  }, []); //by using useEfect hook with empty array dependencies.We can acheive mounting phase of component lifeCycle method.

  useEffect(() => {
    //some code here.
  }, [someDependencies]); //by using useEffect hook with some dependencies in array we can achieve second phase or updating phase of component lifecycle method.

  useEffect(() => {
    //some code here.

    return () => {
      console.log("Clear on exit. That means unmounting.");
    };
  }, [somedependencies]);//by using useEffect hook with some dependencies and a return statement inside useEffect. we can acheive unmounting phase and third or final phase of component lifeCycle method.
  

  return <div>LifeCycleComponent</div>;
};

export default LifeCycleComponent;
