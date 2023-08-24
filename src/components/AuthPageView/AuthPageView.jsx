import React from 'react';
import css from './AuthPageView.module.css';
// import { LoginForm } from 'components/LoginForm';
import { RegisterForm } from 'components';
import { NavLink, Outlet } from 'react-router-dom';

function AuthPageView() {
  return (
    <div className={css.authBox}>
      <div className={css.container}>
        <div className={css.linksBox}>
          <NavLink className={css.authLink} to="register">
            Registration
          </NavLink>
          <NavLink className={css.authLink} to="login">
            Log In
          </NavLink>
        </div>
        <Outlet />
      </div>
      {/* <LoginForm /> */}
      <RegisterForm />
    </div>
  );
}

export default AuthPageView;

/**
 *   <Suspense fallback={<Loader />}>  //будет лоадер
          // <Outlet />
       </Suspense> 
 */
