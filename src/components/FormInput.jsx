import { useFormikContext } from "formik";
import React from "react";
import { Form } from "react-bootstrap";

const FormInput = ({ name, ...otherProps }) => {
  const { handleChange } = useFormikContext();
  return <Form.Control onChange={handleChange(name)} {...otherProps} />;
};

export default FormInput;
