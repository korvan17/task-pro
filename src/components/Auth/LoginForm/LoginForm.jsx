import React from 'react';
import css from '../AuthPageView/AuthPageView.module.css';
import svgSprite from '../../../icons/sprite.svg';

function LoginForm() {
  return (
    <form className={css.authForm}>
      <div className={css.authFormInputBox}>
        <input className={css.authFormInput} placeholder="Enter your email" />
        <div className={css.authFormPassword}>
          <input
            className={css.authFormInput}
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
    </form>
  );
}

export default LoginForm;
