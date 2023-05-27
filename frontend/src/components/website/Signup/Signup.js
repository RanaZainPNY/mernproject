import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./Singup.css";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Signup = () => {
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          // same shape as initial values
          console.log(values);
          actions.resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>        
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
              <div className="red">{errors.firstName}</div>
            ) : null}
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div className="red">{errors.lastName}</div>
            ) : null}
            <Field name="email" type="email" />
            {errors.email && touched.email ? (
              <div className="red">{errors.email}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

      {/* <h1>My Form</h1>
      <Formik
        initialValues={{ name: "jared" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="name"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik> */}
    </div>
  );
};

export default Signup;
