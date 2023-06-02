import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Register.css";
import axios from "axios";

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

const Register = () => {
  const initialValues = {
    email: "",
    password: "",
    // Initialize other form fields here
  };

  const postData = async (url, payload) => {
    try {
      const response = await axios.post(url, payload);
      // Handle response data
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    postData("http://127.0.0.1:5000/user/create", values);
    setSubmitting(false);
  };

  return (
    <>
      <div
        className="main"
        style={{
          backgroundImage: "url('images/carousel/lock.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="sub-main">
          <div>
            <div className="image">
              <div className="Container-image">
                <img
                  src="profile3.jpeg"
                  alt="its image"
                  style={{
                    borderRadius: "50%",
                    maxWidth: "100px",
                    maxHeight: "200px",
                  }}
                />
              </div>
            </div>

            <div>
              <h1>Sign up</h1>
              <Formik
                initialValues={initialValues}
                validationSchema={SigninSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <div className="email-section">
                    <img src="email.png" alt="email" className="email" />
                    <Field className="loginpage" type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                  </div>
                  <div className="password-section">
                    <img
                      src="password.png"
                      alt="password"
                      className="password"
                    />
                    <Field
                      className="loginpage"
                      type="password"
                      name="password"
                    />
                    <ErrorMessage name="password" component="div" />
                  </div>
                  <div className="login-button1 ">
                    <button
                      style={{ borderRadius: "20px", fontWeight: "bold" }}
                    >
                      Register
                    </button>
                  </div>
                  {/* <div>
                    <p className="link">
                      <a href="#">forget password?</a> or{" "}
                      <a href="#">sign up</a>
                    </p>
                  </div> */}
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
