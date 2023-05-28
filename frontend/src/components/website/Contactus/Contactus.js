import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
    // Add your form submission logic here
  };

  return (
    <div className="container">
        <div className="row text-center mt-3 ">
            <h1>Get In Touch with Us </h1>
        </div>
      <div className="row " style={{ marginTop: "50px" }}>
        <div className="col-md-7 py-3 d-flex justify-content-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.464441585135!2d74.39199157598607!3d31.483915448941563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919058ec493a0c1%3A0x4ad2879a5b8db72b!2sDatics%20AI!5e0!3m2!1sen!2s!4v1685246856083!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-md-5 ">
          {/* <div className="container-fluid d-flex justify-content-center align-items-center mt-5 "> */}
          <div className="contact-us-container mt-3 ">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
