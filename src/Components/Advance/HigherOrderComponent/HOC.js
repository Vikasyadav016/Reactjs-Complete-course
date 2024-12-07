import React from 'react'

const HOC = () => {
  return (
    <div>HOC</div>
  )
}

export default HOC


/*

Higher-Order Component (HOC) in React
In React, a Higher-Order Component (HOC) is a pattern used to reuse component logic. 
It is a function that takes a component and returns a new component with additional props or 
behavior. HOCs don't modify the original component directly; instead, they enhance or wrap the
component with additional functionality.

HOCs are often used for cross-cutting concerns, such as adding authentication checks, 
adding theme support, logging, fetching data, and more.

*/

// How Does an HOC Work?
// An HOC is a function that takes a component as an argument and returns a new component. 
// The new component has access to the original component's props and can add extra functionality.

// Here’s the signature of an HOC:

const withEnhancement = (WrappedComponent) => {
    return function EnhancedComponent(props) {
      // Add extra functionality here
      return <WrappedComponent {...props} />;
    };
  };

  
//   In the above example:

// withEnhancement is an HOC that takes a WrappedComponent (a React component) and returns a new 
// component (EnhancedComponent).
// EnhancedComponent is a functional component that renders the original WrappedComponent, 
// passing all its props along.

/*

Why Use HOCs?
HOCs help you:

Re-use component logic: If you have logic that needs to be applied to multiple components, 
an HOC can help you avoid code duplication.
Enhance functionality: You can wrap a component with additional functionality without modifying 
the component itself.
Separation of concerns: By extracting shared behavior into HOCs, your components become more 
focused on rendering UI and less on handling side effects, logic, or external dependencies.


*/

// Example of a Higher-Order Component (HOC)
// Let’s take a simple example where we create an HOC that adds a "loading" state to a component.


import React, { useState, useEffect } from 'react';

// This is the Higher-Order Component (HOC)
const withLoading = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate a data fetching process
      setTimeout(() => {
        setLoading(false);  // Set loading to false after 3 seconds
      }, 3000);
    }, []);

    if (loading) {
      return <div>Loading...</div>;  // Display a loading message
    }

    return <WrappedComponent {...props} />;  // Render the wrapped component
  };
};

// A sample component that we will enhance with the HOC
const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
};

// Use the HOC to enhance the UserList component
const EnhancedUserList = withLoading(UserList);

// Sample usage of the enhanced component
export const App = () => {
  const users = ['Alice', 'Bob', 'Charlie'];
  
  return <EnhancedUserList users={users} />;
};



/*

Common Use Cases for HOCs:
Authorization & Authentication:

Use HOCs to manage authorization by wrapping components that require user authentication. If the user is not logged in, the HOC can redirect them to the login page.
Logging and Analytics:

You can create HOCs that log component render times, user interactions, or send analytic data to a service.
Fetching Data:

A common HOC use case is to wrap a component that needs to fetch data from an API, managing loading and error states.
Adding Theme Support:

You can create an HOC to inject the theme settings (like colors, fonts) into a component.
Adding Error Boundaries:

An HOC can be used to add an error boundary around a component, catching errors in the component tree and showing a fallback UI.
Best Practices:
Don't Overuse HOCs: While HOCs are powerful, they can become complex if overused. Try to keep them simple and modular.
Naming Convention: Use a consistent naming pattern for your HOCs. It’s common to prefix HOCs with "with" to indicate they are enhancing the wrapped component (e.g., withAuth, withLoading).
Props Forwarding: When writing HOCs, always ensure that you pass down the received props to the wrapped component correctly. You can do this with ...props or using React.forwardRef when working with refs.
Avoid Over-Wrapping: Be cautious about wrapping components multiple times, as this can create deeply nested components that can be hard to debug.
Limitations of HOCs:
Props Collision: If the HOC and the wrapped component share the same prop names, it can lead to prop collisions. Make sure to rename props in the HOC to avoid this problem.
Ref Forwarding: If you need to work with refs, HOCs can cause issues because they don’t forward refs by default. You can solve this using React.forwardRef.
Increased Component Hierarchy: Wrapping components with HOCs can lead to deep component trees, which could make debugging more difficult.


*/

// Example of Using Multiple HOCs:
// You can also compose multiple HOCs to apply more than one enhancement to a component. 
// For instance, you might combine an authentication check

// and a loading spinner in the following 
// way:

const withAuth = (WrappedComponent) => {
    return function WithAuth(props) {
      const isAuthenticated = false;
      
      if (!isAuthenticated) {
        return <div>Please log in</div>;
      }
  
      return <WrappedComponent {...props} />;
    };
  };
  
  const withLoadingv = (WrappedComponent) => {
    return function WithLoading(props) {
      if (props.loading) {
        return <div>Loading...</div>;
      }
  
      return <WrappedComponent {...props} />;
    };
  };
  
  // Compose the HOCs
  const EnhancedComponent = withAuth(withLoadingv(UserList));
  