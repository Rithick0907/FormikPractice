import React from "react";
import * as Yup from "yup";
import { FormContainer, FormInput, SubmitButton } from "../components/form";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("required").email("Invalid Email"),
  password: Yup.string()
    .required("required")
    .min(8, "Minimum 8 characters needed")
});

const Login = () => {
  return (
    <FormContainer
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      <FormInput className="mb-2" name="email" placeholder="email" />
      <FormInput
        className="mb-2"
        name="password"
        placeholder="Password"
        type="password"
      />
      <SubmitButton title="Login" />
    </FormContainer>
  );
};

export default Login;
