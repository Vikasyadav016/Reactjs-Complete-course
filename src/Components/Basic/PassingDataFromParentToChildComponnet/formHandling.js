import { useState } from "react";

export const useFormHandlingV = (initialValue) => {
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

  const handleSubmitData = () => {
    if (formValue !== initialValue) {
      console.log("form values", formValue);
    } else {
      alert("Something is missing.");
    }
  };

  return { formValue, handleOnChange, formValueReset, handleSubmitData };
};
