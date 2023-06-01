import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./Register.css";


// const SigninSchema = Yup.object().shape({
//   email: Yup.string().email("Invalid email").required("Required"),
//   password: Yup.string()
//     .required("Password is required")
//     .min(8, "Password must be at least 8 characters long")
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
//       "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
//     ),
// });

const Register = () => {
  return (
    <>
      <div className="main" style={{ backgroundImage: "url('images/carousel/lock.jpg')", backgroundSize: "cover"}}>
        <div className="sub-main">
          <div>
                <div className="image">
                  <div className="Container-image">
                    <img src="profile3.jpeg" alt="its image" style={{borderRadius: "50%", maxWidth: "100px", maxHeight: "200px"}}/>
                  </div>
                </div>

                <div>
                  <h1>Sign up</h1>
                  <div className="email-section">
                    <img src="email.png" alt="email" className="email"/>
                    <input  className="loginpage" type="text" placeholder="email"/>
                  </div>
                  <div className="password-section">
                    <img src="password.png" alt="password" className="password"/>
                    <input className="loginpage" type="password" placeholder="password"/>
                  </div>
                  <div className="login-button1">
                  <button  style={{borderRadius: "80px",fontWeight:"bold"}}>Login</button>
                  </div>
                  <div>
                    <p className="link">
                      <a href="#">forget password?</a> or <a href="#">sign up</a>
                    </p>
                  </div>
                </div>

          </div>
        </div>
        
        
      </div>
    </>
  );
};

export default Register;
