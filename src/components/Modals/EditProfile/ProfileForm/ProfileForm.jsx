import { Form, Field } from 'formik';
import { useFormikContext } from 'formik';
import { useTheme } from '@emotion/react';
import { useState } from 'react';

import sprite from '../../../../icons/sprite.svg';
import { Buttons } from 'components';
import css from './ProfileForm.module.css';
import { IconButton } from 'components';
import ImageInput from './ImgInput';

export default function ProfileForm() {
  const { values } = useFormikContext();
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form className={css.form}>
      <label htmlFor="avatar">
        <ImageInput />
        <div className={css.userAvaWrapper}>
          <div className={css.imgWrapper}>
            <img
              src={values.avatarURL}
              alt=""
              className={css.userImg}
              width={68}
            />
          </div>
          <Buttons
            className={css.iconBtn}
            pushButton={() => {
              const fileInput = document.getElementById('avatar');
              fileInput.click();
            }}
          >
            <svg style={{}} className={css.icon} width={10} height={10}>
              <use xlinkHref={`${sprite}#icon-add`} />
            </svg>
          </Buttons>
        </div>
      </label>
      <div className={css.inputsWrapper}>
        <label>
          <Field
            style={{
              color: theme.popUp.inputTextColor,
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
            svg={
              <use
                style={{
                  stroke: showPassword
                    ? theme.popUp.selectedIconFill
                    : theme.popUp.iconsFill,
                }}
                href={`${sprite}#icon-eye`}
              />
            }
            size={18}
            pushButton={handleTogglePassword}
          />
          {/* <AddIconButton>sdfadsf</AddIconButton>
          <AddColumnButton>sdfadsf</AddColumnButton> */}
        </label>
      </div>
      <Buttons
        style={{
          backgroundColor: theme.popUp.buttonBackground,
          color: theme.popUp.buttonTextColor,
        }}
        buttonType="submit"
      >
        Send
      </Buttons>
      {/* <button type='submit'>dsfdsf</button> */}
    </Form>
  );
}
