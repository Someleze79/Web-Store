// src/pages/Register.js

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // For validation

// Validation rules for registration form
const registerValidationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'First name should not exceed 15 characters')
    .required('First name is required'),
  surname: Yup.string()
    .max(20, 'Surname should not exceed 20 characters')
    .required('Surname is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Must include a lowercase letter')
    .matches(/[A-Z]/, 'Must include an uppercase letter')
    .matches(/\d/, 'Must include a number')
    .matches(/[^a-zA-Z0-9]/, 'Must include a special character')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

function Register() {
  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <Formik
        initialValues={{
          firstName: '',
          surname: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={registerValidationSchema}
        onSubmit={(values) => {
          alert(`Registered: ${values.firstName} ${values.surname}`);
        }}
      >
        <Form>
          {/* First Name input */}
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <Field type="text" id="firstName" name="firstName" className="form-control" />
            <ErrorMessage name="firstName" component="div" className="text-danger" />
          </div>

          {/* Surname input */}
          <div className="mb-3">
            <label htmlFor="surname" className="form-label">Surname</label>
            <Field type="text" id="surname" name="surname" className="form-control" />
            <ErrorMessage name="surname" component="div" className="text-danger" />
          </div>

          {/* Email input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <Field type="email" id="email" name="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>

          {/* Password input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <Field type="password" id="password" name="password" className="form-control" />
            <ErrorMessage name="password" component="div" className="text-danger" />
          </div>

          {/* Confirm Password input */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <Field type="password" id="confirmPassword" name="confirmPassword" className="form-control" />
            <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-success">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;