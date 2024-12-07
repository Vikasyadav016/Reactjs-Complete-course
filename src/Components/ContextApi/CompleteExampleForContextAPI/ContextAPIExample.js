import React, { useContext } from "react";

export const ExampleOfCreateContext = useContext(null);
//by using useContext hook of react in process of using context api concept, we create context first.

export const ExapleOfContextProvider = () => {
  const exampleValue = { name: "Raghu Anand", age: 30 }; // this is the second step comes in the process of usinng context api concept.This is example value which e passed to wrappered component.
  return (
    <div>
      <ExampleOfCreateContext.Provider value={exampleValue}>
        <ExampleOfUseContext />
      </ExampleOfCreateContext.Provider>
    </div>
  );
};

export const ExampleOfUseContext = () => {
  const valuesForUse = useContext(ExampleOfCreateContext);//this is the third and final steps comes in use of concept of context api.This can be done by using useContext hook and also by ContextApi.Consumer component .

  return (
    <div>
      Context API Example
      <ul>
        <li>{valuesForUse.name}</li>
        <li>{valuesForUse.age}</li>
      </ul>
    </div>
  );
};
