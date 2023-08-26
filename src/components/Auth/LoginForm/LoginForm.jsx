import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import svgSprite from '../../../icons/sprite.svg';
import css from '../AuthPageView/AuthPageView.module.css';
import { loginSchema } from '../userSchemas';

const initialValues = {
  email: '',
  password: '',
};

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleFormSubmit = async (values, { resetForm }) => {
    await dispatch(login(values));
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
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Confirm a password"
            />
            <div className={css.iconWrapper}>
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
        </div>

        <button className={css.authFormInputButton} type="submit">
          Log In Now
        </button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
