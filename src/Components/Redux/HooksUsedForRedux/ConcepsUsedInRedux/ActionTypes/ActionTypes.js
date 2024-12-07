/*
Concept of Action Type in redux.

Definitions:

In Redux, action types are constants that represent specific actions or events 
that can occur in the application. They are used to identify the type of action being 
dispatched to the store. The purpose of using action types is to avoid mistakes caused 
by typos in string literals and to ensure consistency across the application when dispatching 
and handling actions.

Action types are typically defined as string constants and are often grouped 
together in a separate file (e.g., actionTypes.js or constants.js) to ensure reusability 
and reduce errors from hardcoding strings throughout the codebase.


Why Use Action Types?

Consistency: 
            Defining action types as constants helps avoid typos when dispatching 
            actions or handling them in reducers. It ensures that all action creators 
            and reducers use the same string.
Maintainability: 
            Grouping related action types together in a single file helps maintain and manage 
            them more easily as the application grows.
Debugging: 
            Having consistent action types makes it easier to trace the flow of actions in your 
            application, especially when using middleware like Redux DevTools for debugging.


Redux Action Types in the Context of Asynchronous Actions

When dealing with asynchronous actions, action types can help distinguish between 
the different stages of the asynchronous flow, such as when an action is requested, 
when it succeeds, and when it fails.

*/


// actionTypes.js
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_COUNTER = 'SET_COUNTER';

//Example of Action Types for Async Actions
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';



/*

Summary of Action Types in Redux

Action types are constants (usually strings) that represent the different events or 
actions in your application.

They help ensure consistency and avoid typos when working with actions and reducers.
Action types can be grouped in separate files and used in both action creators and reducers 
to handle the corresponding events.

For asynchronous actions, it's common to define multiple action types 
(e.g., request, success, failure) to handle different stages of the async operation.

Naming conventions such as uppercase strings and namespacing help organize action types, 
especially in larger applications.
*/