import { createContext } from "react";

/*

In React, the Context Provider is a mechanism for passing data through the component tree without 
having to pass props down manually at every level. It is part of the Context API, 
which allows you to share values like themes, user authentication status, or language 
settings globally across your application.

What is Context in React?
React's Context provides a way to share values between components, no matter how deeply they are nested, without manually passing those values as props at every level.

Context consists of three main components:

React.createContext() – This function is used to create a new Context object. This object will contain both the Provider and the Consumer.
Context.Provider – The Provider component is used to make a value available to all the components within its tree (or a subtree).
Context.Consumer – The Consumer component is used to access the context value.
However, with the introduction of React hooks (specifically useContext), you typically don't need to use the Consumer component anymore. The useContext hook allows you to directly access the context value in functional components.

How Context Works
Context.Provider: It is a component that is used to provide the value (state or data) that you want to share with other components.
Context.Consumer or useContext: These are used to consume the value from the context.


*/
import React from "react";
import ExapleOfUseContextApi from "../UseContext";
import ContextApiVV from "../CreateContext";

const ContextProviderExample = () => {
  const data = {
    name: "Vikas Kumar",
    email: "vikasyadav@gmail.com",
    age: 25,
    contactNo: "9878562365",
  };
  const coll = "College";

  return (
    <div>
      <ContextApiVV.Provider value={data}>
        <ExapleOfUseContextApi />
      </ContextApiVV.Provider>
    </div>
  );
};

export default ContextProviderExample;
