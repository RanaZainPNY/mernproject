import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be positive"),
  description: Yup.string().required("Description is required"),
  imageUrl: Yup.string().required("Image URL is required"),
});

const ProductForm = () => {
  
  const initialValues = {
    name: "",
    price: "",
    description: "",
    imageUrl: "",
  };

  const [successMessage, setSuccessMessage] = useState('');
  

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    // console.log(values);
    axios
      .post("http://localhost:5000/product/create", values)
      .then((res) => {
        console.log(res);
        setSuccessMessage('Product created successfully!');
      })
      .catch((err) => {
        console.log(err);
      });
    setSubmitting(false);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <h2>Add Product</h2>
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <label htmlFor="price">Price</label>
            <Field type="number" id="price" name="price" />
            <ErrorMessage name="price" component="div" />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <Field type="text" id="description" name="description" />
            <ErrorMessage name="description" component="div" />
          </div>

          <div>
            <label htmlFor="imageUrl">Image URL</label>
            <Field type="text" id="imageUrl" name="imageUrl" />
            <ErrorMessage name="imageUrl" component="div" />
          </div>

          <button className="my-3" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ProductForm;
