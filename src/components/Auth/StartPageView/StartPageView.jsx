import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import css from './StartPageView.module.css';
import svgSprite from '../../../icons/sprite.svg';
import UserImg from './UserImg/UserImg.js';
import { isLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

function StartPageView() {
  const isAuthorized = useSelector(isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthorized) return navigate('/home');
  }, [navigate, isAuthorized]);

  return (
    <div className={css.startPageSection}>
      <UserImg />
      <div className={css.startPageTitileBox}>
        <svg className={css.icon} width={40} height={40}>
          <use href={svgSprite + '#icon-logo'} />
        </svg>
        <h1 className={css.startPageTitile}>Task Pro</h1>
      </div>
      <p className={css.startPageDescr}>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </p>
      <div className={css.startPageLinksBox}>
        <NavLink to="auth/register" className={css.startPageRegLink}>
          Registration
        </NavLink>
        <NavLink to="auth/login" className={css.startPageLinks}>
          Log In
        </NavLink>
      </div>
    </div>
  );
}

export default StartPageView;
