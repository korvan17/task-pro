import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './StartPageView.module.css';
import svgSprite from '../../../icons/sprite.svg';

function StartPageView() {
  return (
    <div className={css.startPageSection}>
      <picture className={css.startPageImage}>
        <source
          srcSet={
            require('../../../images/mob-boy-img-1x.png') +
            ' 1x,' +
            require('../../../images/mob-boy-img-2x.png') +
            ' 2x'
          }
          media="(max-width: 767px)"
        />
        <source
          srcSet={
            require('../../../images/tablet-boy-img-1x.png') +
            ' 1x,' +
            require('../../../images/tablet-boy-img-2x.png') +
            ' 2x'
          }
          media="(max-width: 1199px)"
        />
        <source
          srcSet={
            require('../../../images/desk-boy-img-1x.png') +
            ' 1x,' +
            require('../../../images/desk-boy-img-2x.png') +
            ' 2x'
          }
          media="(min-width: 1200px)"
        />
        <img
          src={require('../../../images/mob-boy-img-1x.png')}
          alt="user"
          height="124"
        />
      </picture>

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
        <NavLink to="auth/register" className={css.startPageLinks}>
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
