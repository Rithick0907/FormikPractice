import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { FormContainer } from "../styles/Login.styles";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("required").email("Invalid Email"),
  password: Yup.string()
    .required("required")
    .min(8, "Minimum 8 characters needed")
});

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={validationSchema}
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
