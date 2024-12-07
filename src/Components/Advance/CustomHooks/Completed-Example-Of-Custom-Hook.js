import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
  useFetch,
  useFormHandling,
  useGeolocation,
} from "./About-Custom-Hooks";

const useData = () => {
  const [add, setAdd] = useState("");

  const displaySum = () => {
    setAdd((pre) => pre + 1);
  };
  return [add, displaySum];
};

const CompletedExampleOfCustomHook = () => {
  const [add, displaySum] = useData(); //first custom hook
  const [data, loading, errorMessage] = useFetch("www.xyx.com"); // second custom hook
  const { formValue, handleOnChange, formValueReset } = useFormHandling({
    name: "",
    email: "",
  }); //third custom hook for handling form
  const { position } = useGeolocation(); //fourth custom hook for geo loaction
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    formValueReset();
  };

  return (
    <div>
      Completed Example of Custom Hook
      <h1>Dispaly value : {add}</h1>
      <Button onClick={displaySum}>+</Button>
      {loading ? "Weare fetching details..." : null}
      {errorMessage ? errorMessage : null}
      {data.map((data) => (
        <h3>{data}</h3>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formValue.name}
          onChange={handleOnChange}
          placeholder="Enter your name"
        />
        <input
          type="email"
          name="email"
          value={formValue.email}
          onChange={handleOnChange}
          placeholder="Enter your email"
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>Latitude: {position.latitude}</p>
        <p>Longitude: {position.longitude}</p>
      </div>
    </div>
  );
};

export default CompletedExampleOfCustomHook;
