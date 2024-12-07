/*

Custom Hooks in React
In React, custom hooks are a way to encapsulate logic that can be reused across multiple components. 
A custom hook is essentially a JavaScript function that uses React's built-in hooks 
(like useState, useEffect, useReducer, etc.) to abstract and share stateful logic between components.

The main benefit of custom hooks is reusability. Instead of repeating the same logic across multiple 
components, you can encapsulate that logic in a custom hook and call that hook wherever needed.

Why use Custom Hooks?

Code Reusability: Encapsulate stateful logic in one place and reuse it across multiple components.
Separation of Concerns: Helps in separating the logic from the UI, making the codebase more maintainable
and readable.

Improves Testability: It makes it easier to unit test a specific piece of logic without worrying about 
UI components.

Basic Syntax for Custom Hooks
Custom hooks must always start with the word use. This is a convention to let React know that 
it's a hook and can only be called inside functional components or other hooks.

*/

//Example 1

import { useEffect, useState } from "react";

export const useCustomHook = () => {
  const [isToggle, setIsToggle] = useState(false);

  const checkToggleState = () => {
    setIsToggle(!isToggle);
  };
  return [isToggle, checkToggleState];
};

// Example 1:
// Custom Hook to Fetch Data
// One common use of custom hooks is to encapsulate logic for data fetching.
// useFetch Hook:

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong in fetching details.");
      }
      setData(response.data);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  return [data, loading, errorMessage];
};

// Example 2: Custom Hook for Form Handling
// Another common case is managing forms and their validation.

export const useFormHandling = (initialValue) => {
  const [formValue, setFormValue] = useState(initialValue);

  function handleOnChange(event) {
    const { name, value } = event.target;
    setFormValue((pre) => ({
      ...pre,
      [name]: value,
    }));
  }

  const formValueReset = () => {
    setFormValue(initialValue);
  };

  return { formValue, handleOnChange, formValueReset };
};

// Example 3: Custom Hook for Local Storage
// You can also use custom hooks to interact with the browser's localStorage API.

// useLocalStorage Hook:

export const useLocalStorage = (key, initialValue) => {
  const [storedValues, seStoredValues] = useState(() => {
    const valueStoredInLocalStorage = window.localStorage.getItem(key);
    return valueStoredInLocalStorage
      ? JSON.parse(valueStoredInLocalStorage)
      : initialValue;
  });

  const setValuesInLocalStorage = () => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValues) : value;
      seStoredValues(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return { setValuesInLocalStorage, storedValues };
};

// Example 4: Custom Hook for Geolocation
// You can create a custom hook to get the user's geolocation.

// useGeolocation Hook:

export const useGeolocation = () => {
  const [position, setPosition] = useState(null);
  const [errorMessage, setErrorMessage] = useState(string | null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setErrorMessage("Your browser does not support geolocation.");
      return;
    }
    const geoId = navigator.geolocation.watchPosition((currentPosition) => {
      setPosition(currentPosition.coords),
        (error) => setErrorMessage(error.message);
    });
    return () => navigator.geolocation.clearWatch(geoId);
  }, []);
  return { position, errorMessage };
};

/*
Conclusion
Custom hooks in React are powerful tools that allow developers to encapsulate and reuse logic across 
components. 
By abstracting logic into reusable hooks, we can make our components cleaner, more maintainable, 
and improve code readability.

You can create custom hooks for:

Data fetching (useFetch)
Form management (useForm)
Local storage handling (useLocalStorage)
Geolocation tracking (useGeolocation)
And much more!
With custom hooks, you can follow the DRY (Don't Repeat Yourself) principle and make your 
React applications more modular.


*/
