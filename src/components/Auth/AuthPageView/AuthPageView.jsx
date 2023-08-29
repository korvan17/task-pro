import React from 'react';
import css from './AuthPageView.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { Loader } from 'components';
import { Suspense } from 'react';

function AuthPageView() {
  return (
    <div className={css.authBox}>
      <div className={css.container}>
        <div className={css.linksBox}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? `${css.authLink}+ ${css.active}` : css.authLink;
            }}
            to="register"
          >
            Registration
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? `${css.authLink} + ${css.active}`
                : css.authLink;
            }}
            to="login"
          >
            Log In
          </NavLink>
        </div>
      </div>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default AuthPageView;

/**
 *   <Suspense fallback={<Loader />}>  //будет лоадер
          // <Outlet />
       </Suspense> 
 */
