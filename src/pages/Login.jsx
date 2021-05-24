import { Formik } from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import { FormContainer } from "../styles/Login.styles";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      onSubmit={(values) => console.log(values)}
    >
      {() => (
        <FormContainer>
          <FormInput className="mb-2" name="email" placeholder="email" />
          <FormInput
            className="mb-2"
            name="password"
            placeholder="Password"
            type="password"
          />
          <SubmitButton name="Login" />
        </FormContainer>
      )}
    </Formik>
  );
};

export default Login;
