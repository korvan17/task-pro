import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './StartPageView.module.css';

function StartPageView() {
  return (
    <div className={css.startPageSection}>
      <p className={css.startPageImage}>Boy image</p>
      <div className={css.startPageTitileBox}>
        <p>Logo icon svg</p>
        <h1 className={css.startPageTitile}>Task Pro</h1>
      </div>
      <p className={css.startPageDescr}>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </p>
      <div className={css.startPageLinksBox}>
        <NavLink to="register" className={css.startPageLinks}>
          Registration
        </NavLink>
        <NavLink to="login" className={css.startPageLinks}>
          Log In
        </NavLink>
      </div>
    </div>
  );
}

export default StartPageView;
