import React from 'react';
import css from '../AuthPageView/AuthPageView.module.css';

function LoginForm() {
  return (
    <form className={css.authForm}>
      <div className={css.authFormInputBox}>
        <input className={css.authFormInput} placeholder="Enter your email" />
        <input className={css.authFormInput} placeholder="Create a password" />
      </div>

      <button className={css.authFormInputButton} type="submit">
        Log In Now
      </button>
    </form>
  );
}

export default LoginForm;
