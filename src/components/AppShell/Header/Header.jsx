import React from 'react';
import { useState, useEffect } from 'react';
import sprite from '../../../icons/sprite.svg';
import css from './Header.module.css';
import { Theme } from 'components';

export default function Header({ toggleMenu }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  // const toggleTheme = () => {
  //   console.log('toggle theme menu');
  //   setIsThemeMenuOpen(!isThemeMenuOpen);
  // };

  return (
    <div className={css.container}>
      {windowWidth < 1440 ? (
        <button onClick={toggleMenu} className={css.menuBtn} type="button">
          <svg className={css.menuIcon} width="32" height="32">
            <use xlinkHref={`${sprite}#icon-menu`} />
          </svg>
        </button>
      ) : null}

      <div className={css.options}>
        {/* <div className={css.themeContainer}>
          <p className={css.themeTitle}>Theme</p>
          <button onClick={toggleTheme} className={css.themeBtn} type="button">

            <svg className={css.themeIcon} width="16" height="16">
              <use xlinkHref={`${sprite}#icon-theme`} />
            </svg>
          </button>
        </div> */}
        <Theme />
        <ul className={css.userInfo}>
          <li className={css.userName}>Ivetta</li>
          <li className={css.userAvatart}>Avatar</li>
        </ul>
      </div>
    </div>
  );
}
