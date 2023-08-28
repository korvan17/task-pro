import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import svgSprite from '../../../icons/sprite.svg';
import css from '../AuthPageView/AuthPageView.module.css';
import { registerSchema } from '../userSchemas';
import { register } from 'redux/auth/authOperations';

const getDisplayType = () => {
  const displayWidth = window.innerWidth;
  const isRetina =
    window.matchMedia &&
    window.matchMedia(
      '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
    ).matches;
  switch (displayWidth) {
    case displayWidth >= 1440:
      return isRetina ? 'desktop-2x' : 'desktop';
    case displayWidth >= 768:
      return isRetina ? 'table-2x' : 'table';
    default:
      return isRetina ? 'mobile-2x' : 'mobile';
  }
};

const initialValues = {
  name: '',
  email: '',
  password: '',
  display: getDisplayType(),
};

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = async (values, { resetForm }) => {
    console.log('values:', values);
    await dispatch(register(values));
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
            <div className={css.iconWrapper}>
              <svg
                width={18}
                height={18}
                className={css.authIcons}
                onClick={handleTogglePassword}
              >
                <use href={svgSprite + '#icon-eye'} />
              </svg>
            </div>
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
