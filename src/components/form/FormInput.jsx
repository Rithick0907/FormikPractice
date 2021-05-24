import { useFormikContext } from "formik";
import React from "react";
import { Form } from "react-bootstrap";
import ErrorMessage from "./ErrorMessage";

const FormInput = ({ name, ...otherProps }) => {
  const { handleChange, errors, touched, setFieldTouched } = useFormikContext();

  return (
    <>
      <Form.Control
        onBlur={() => setFieldTouched(name)}
        onChange={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormInput;
