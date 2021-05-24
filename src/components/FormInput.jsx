import { useFormikContext } from "formik";
import React from "react";
import { Form } from "react-bootstrap";
import { ErrorMessage } from "../styles/FormInput.styles";

const FormInput = ({ name, ...otherProps }) => {
  const { handleChange, errors } = useFormikContext();
  return (
    <>
      <Form.Control onChange={handleChange(name)} {...otherProps} />
      <ErrorMessage>{errors[name]}</ErrorMessage>
    </>
  );
};

export default FormInput;
