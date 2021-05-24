import { Formik } from "formik";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { FormContainer } from "../styles/Login.styles";

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleSubmit }) => (
        <FormContainer>
          <Form.Control
            className="my-2"
            placeholder="Email"
            onChange={handleChange("email")}
          ></Form.Control>
          <Form.Control
            className="mb-2"
            placeholder="Password"
            onChange={handleChange("password")}
            type="password"
          ></Form.Control>
          <Button onClick={handleSubmit}>Login</Button>
        </FormContainer>
      )}
    </Formik>
  );
};

export default Login;
