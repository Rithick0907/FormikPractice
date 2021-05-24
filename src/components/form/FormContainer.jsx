import { Formik } from "formik";

const FormContainer = ({
  children,
  initialValues,
  onSubmit,
  validationSchema
}) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {() => <>{children}</>}
  </Formik>
);

export default FormContainer;
