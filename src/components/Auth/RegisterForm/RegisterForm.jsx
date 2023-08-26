import React, { useState } from 'react';

import css from '../AuthPageView/AuthPageView.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerSchema } from '../userSchemas';
import svgSprite from '../../../icons/sprite.svg';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = (values, { resetForm }) => {
    console.log('values:', values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={registerSchema}
    >
      <Form className={css.authForm} autoComplete="off">
        <div className={css.authFormInputBox}>
          <div className={css.authFormInpWrap}>
            <ErrorMessage
              name="name"
              render={message => <p className={css.errorMessage}>{message}</p>}
            />
            <Field
              className={css.authFormInput}
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className={css.authFormInpWrap}>
            <ErrorMessage
              name="email"
              render={message => <p className={css.errorMessage}>{message}</p>}
            />
            <Field
              className={css.authFormInput}
              type="text"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className={css.authFormInpWrap}>
            <ErrorMessage
              name="password"
              render={message => <p className={css.errorMessage}>{message}</p>}
            />
            <Field
              className={css.authFormInput}
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Create a password"
            />
            <svg
              width={18}
              height={18}
              className={css.svg}
              onClick={handleTogglePassword}
            >
              <use href={svgSprite + '#icon-eye'} />
            </svg>
          </div>
        </div>

        <button className={css.authFormInputButton} type="submit">
          Register Now
        </button>
      </Form>
    </Formik>
  );
}

export default RegisterForm;
