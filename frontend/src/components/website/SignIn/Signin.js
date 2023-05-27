import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./Signin.css";

const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

const Signin = () => {
  return (
    <div>
      <div className="container-fluid  bg-dark vh-100 d-flex justify-content-center align-items-center">
        <div className="container  w-50 bg-light ">
          {/* <div className="row">Logo Here</div> */}
          <div>
            <img src="logo.png" alt="" />
          </div>
          <div className="row">
            <div className="container bg-success text-white mb-3 p-3">
              <h1 className="text-center">Log In</h1>
            </div>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={SigninSchema}
              onSubmit={(values, actions) => {
                console.log(values);
                actions.resetForm();
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="email">
                      <b>Email</b>
                    </label>
                    <Field name="email" type="email" className="form-control" />
                    {errors.email && touched.email ? (
                      <div className="red">{errors.email}</div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">
                      <b>Password</b>
                    </label>
                    <Field
                      name="password"
                      type="password"
                      className="form-control"
                    />
                    {errors.password && touched.password ? (
                      <div className="red">{errors.password}</div>
                    ) : null}
                  </div>

                  <button type="submit" className="btn btn-primary mb-2">
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
