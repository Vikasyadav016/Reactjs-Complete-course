import React, { useContext } from "react";
import ContextApi from "../CreateContext";

const ExapleOfUseContextApi = () => {
  const contextData = useContext(ContextApi);
  return (
    <div>
      <h3>User Information</h3>
      <p>
        <strong>Name:</strong> {contextData?.name}
      </p>
      <p>
        <strong>Email:</strong> {contextData?.email}
      </p>
      <p>
        <strong>Age:</strong> {contextData?.contactNo}
      </p>
    </div>
  );
};

export default ExapleOfUseContextApi;
