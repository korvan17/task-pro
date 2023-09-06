import React from 'react';
import { useTheme } from '@emotion/react';
import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import css from './EditProfile.module.css';
import { IconButton } from 'components';
import sprite from '../../../icons/sprite.svg';
import { updateUser } from 'redux/auth/authOperations';
import ProfileForm from './ProfileForm/ProfileForm';

export default function EditProfile({ onClose }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const handleFormSubmit = values => {
    dispatch(
      updateUser({
        avatar: values.avatar,
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    onClose();
  };

  const theme = useTheme();

  return (
    <div
      className={css.conteiner}
      style={{ background: theme.popUp.background }}
    >
      <IconButton
        className={`${css.icon} ${css.closeIcon}`}
        svg={
          <use
            style={{ stroke: theme.popUp.selectedIconFill }}
            href={`${sprite}#icon-close`}
          />
        }
        size={18}
        pushButton={onClose}
      />
      <h2 style={{ color: theme.popUp.titleColor }} className={css.heading}>
        Edit profile
      </h2>

      <Formik
        initialValues={{
          name: user.name,
          email: user.email,
          password: '',
          avatar: '',
          avatarURL: user.avatarURL,
        }}
        onSubmit={handleFormSubmit}
        // validationSchema={registerSchema}
      >
        <ProfileForm />
      </Formik>
    </div>
  );
}
