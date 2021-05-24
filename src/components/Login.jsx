import { Formik } from "formik";
import React from "react";
import { Form } from "react-bootstrap";

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      onSubmit={(values) => console.log(values)}
    >
      <Form.Control placeholder="email"></Form.Control>
    </Formik>
  );
};
