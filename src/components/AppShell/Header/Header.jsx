import React from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from '@emotion/react';
import sprite from '../../../icons/sprite.svg';
import css from './Header.module.css';
import { EditProfile, Theme } from 'components';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import { useSelector } from 'react-redux';

export default function Header({ toggleMenu }) {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const theme = useTheme();

  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const toggleEditProfile = () => {
    setShowEditProfile(!showEditProfile);
  };

  return (
    <div
      style={{ backgroundColor: theme.header.background }}
      className={css.container}
    >
      {windowWidth < 1440 ? (
        <button onClick={toggleMenu} className={css.menuBtn} type="button">
          <svg
            style={{ stroke: theme.header.menuButtonColor }}
            className={css.menuIcon}
            width="32"
            height="32"
          >
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
        <div className={css.userInfo}>
          <p
            style={{ color: theme.header.userNameColor }}
            className={css.userName}
          >
            {user.name}
          </p>

          <button
            type="button"
            onClick={toggleEditProfile}
            className={css.userBtn}
          >
            {user.avatarURL ? (
              <img
                src={user.avatarURL}
                alt={user.name}
                width="32"
                height="32"
              />
            ) : (
              <svg
                className={css.userAvatart}
                // className={css.menuIcon}
                width="32"
                height="32"
              >
                <use xlinkHref={`${sprite}#icon-user`} />
              </svg>
            )}
          </button>
        </div>
      </div>
      {showEditProfile && (
        <BasicModal onClose={toggleEditProfile} withoutWrpaper={true}>
          <EditProfile onClose={toggleEditProfile} />
        </BasicModal>
      )}
    </div>
  );
}
