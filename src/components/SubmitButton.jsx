import { useFormikContext } from "formik";
import React from "react";
import { Button } from "react-bootstrap";

const SubmitButton = ({ name }) => {
  const { handleSubmit } = useFormikContext();
  return <Button onClick={handleSubmit}>{name}</Button>;
};

export default SubmitButton;
