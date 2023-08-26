import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import css from '../AuthPageView/AuthPageView.module.css';
import svgSprite from '../../../icons/sprite.svg';
import { loginSchema } from '../userSchemas';

const initialValues = {
  email: '',
  password: '',
};

function LoginForm() {
  const handleFormSubmit = (values, { resetForm }) => {
    console.log('values:', values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={loginSchema}
    >
      <Form className={css.authForm} autoComplete="off">
        <div className={css.authFormInputBox}>
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
              type="password"
              name="password"
              placeholder="Confirm a password"
            />

            <svg
              width={18}
              height={18}
              className={css.svg}
              // onClick={на клике открыть пароль}
            >
              <use href={svgSprite + '#icon-eye'} />
            </svg>
          </div>
        </div>

        <button className={css.authFormInputButton} type="submit">
          Log In Now
        </button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
