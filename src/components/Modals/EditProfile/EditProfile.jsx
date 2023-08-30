import { useTheme } from '@emotion/react';

import css from './EditProfile.module.css';
import sprite from '../../../icons/sprite.svg';
export default function EditProfile() {
  const theme = useTheme();
  return (
    <div className={css.conteiner}>
      <h2 style={{ color: theme.popUp.titleColor }} className={css.title}>
        Edit profile
      </h2>
      <svg className={css.userImg}>
        <use xlinkHref={`${sprite}#icon-user`} />
      </svg>

      <form className={css.form}>
        <div className={css.blockInputs}>
          <input
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

          <input
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

          <input
            style={{
              color: theme.popUp.titleColor,
              borderColor: theme.popUp.inputBorderColor,
              '::placeholder': { color: theme.popUp.inputPlaceholderColor },
            }}
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className={css.input}
          />
        </div>
        <button
          style={{
            backgroundColor: theme.popUp.buttonBackground,
            color: theme.popUp.buttonTextColor,
          }}
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
