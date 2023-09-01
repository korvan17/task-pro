import React from 'react';
import { useState } from 'react';
import { useTheme } from '@emotion/react';
import { Formik, Form, Field } from 'formik';

import css from './EditProfile.module.css';
import userAva from '../../../icons/Vector.jpg';
import { Buttons, IconButton } from 'components';
import sprite from '../../../icons/sprite.svg';

const initialValues = {
  name: 'test',
  email: 'test',
  password: 'test',
};

export default function EditProfile({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = () => {};

  const theme = useTheme();
  return (
    <div className={css.conteiner}>
      <IconButton
        className={`${css.icon} ${css.closeIcon}`}
        svg={<use href={`${sprite}#icon-close`} />}
        size={18}
        onClick={onClose}
      />
      <h2 style={{ color: theme.popUp.titleColor }} className={css.heading}>
        Edit profile
      </h2>
      <div className={css.userAvaWrapper}>
        <div className={css.imgWrapper}>
          <img
            src={userAva}
            alt="user profile avatar"
            className={css.userImg}
            width={68}
          />
        </div>
        <Buttons className={css.iconBtn}>
          <svg className={css.icon} width={10} height={10}>
            <use xlinkHref={`${sprite}#icon-add`} />
          </svg>
        </Buttons>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        // validationSchema={}
      >
        <Form className={css.form}>
          <div className={css.inputsWrapper}>
            <label>
              <Field
                style={{
                  color: theme.popUp.titleColor,
                  borderColor: theme.popUp.inputBorderColor,
                  '::placeholder': { color: theme.popUp.inputPlaceholderColor },
                }}
                type="text"
                id="name"
                name="name"
                placeholder="name"
                className={css.input}
              />
            </label>
            <label>
              <Field
                style={{
                  color: theme.popUp.titleColor,
                  borderColor: theme.popUp.inputBorderColor,
                  '::placeholder': { color: theme.popUp.inputPlaceholderColor },
                }}
                type="email"
                id="email"
                name="email"
                placeholder="example@example.com"
                className={css.input}
              />
            </label>
            <label className={css.passwordLabel}>
              <Field
                style={{
                  color: theme.popUp.titleColor,
                  borderColor: theme.popUp.inputBorderColor,
                  '::placeholder': { color: theme.popUp.inputPlaceholderColor },
                }}
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="password"
                className={css.input}
              />
              <IconButton
                className={css.eyeIcon}
                svg={<use href={`${sprite}#icon-eye`} />}
                size={18}
                onClick={handleTogglePassword}
              />
            </label>
          </div>
          <Buttons
            style={{
              backgroundColor: theme.popUp.buttonBackground,
              color: theme.popUp.buttonTextColor,
            }}
            type="submit"
          >
            Send
          </Buttons>
        </Form>
      </Formik>
    </div>
  );
}
