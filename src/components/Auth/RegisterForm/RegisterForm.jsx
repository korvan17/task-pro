import React from 'react';
import css from '../AuthPageView/AuthPageView.module.css';

function RegisterForm() {
  return (
    <form className={css.authForm}>
      <div className={css.authFormInputBox}>
        <input className={css.authFormInput} placeholder="Enter your name" />
        <input className={css.authFormInput} placeholder="Enter your email" />
        <input className={css.authFormInput} placeholder="Create a password" />
      </div>

      <button className={css.authFormInputButton} type="submit">
        Register Now
      </button>
    </form>
  );
}

export default RegisterForm;
