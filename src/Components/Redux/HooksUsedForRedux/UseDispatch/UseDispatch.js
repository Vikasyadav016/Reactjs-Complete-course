import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const UseDispatch = () => {
  const dispatch = useDispatch;
  return (
    <div>
      UseDispatch
      <Button onClick={() => dispatch({ type: "Increment", payload: 2 })}>
        Increment
      </Button>
    </div>
  );
};

export default UseDispatch;

/*
Concet of useDispatch hook in react-redux

Definition:
            useDispatch hook is a buildin react function.
            This hook is used in react-redux to helps in connecting React component to redux.  
            This hook is returns the store's dispatch method to let you dispatch actions.

Uses of useDispatch:
            This hook is used to dispatch action from UI.
            It is used to disaptch a action which modify/change the state of store.
Sytax of useDispatch:
            //first we create a dispatch variable using importing useDispatch hook like below.
            import {useDispatch} from "react-redux" // import this above component.
            const dispatch = useDispatch();          // then use like this in your component.

            here, The dispatch function returned by useDispatch is used to trigger the actions that interact with the Redux store.

            function add(x){
            dispatch(add(x))                        //and like this call dispatch function
            };
            

*/
