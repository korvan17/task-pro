import React from 'react';
import { useState } from 'react';
import sprite from '../../../icons/sprite.svg';
import css from './TopBar.module.css';
import { useEffect } from 'react';

export default function TopBar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Функция для обновления состояния ширины окна
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Добавляем слушатель события изменения размера окна
    window.addEventListener('resize', updateWindowWidth);

    // Удаляем слушатель события при размонтировании компонента
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []); // Пустой массив зависимостей, чтобы эффект выполнился только при монтировании

  return (
    <div className={css.container}>
      {windowWidth < 1440 ? (
        <svg className={css.themeIcon} width="32" height="32">
          <use xlinkHref={`${sprite}#icon-menu`} />
        </svg>
      ) : null}

      <div className={css.options}>
        <div className={css.themeContainer}>
          <p className={css.themeTitle}>Theme</p>
          <svg className={css.themeIcon} width="16" height="16">
            <use xlinkHref={`${sprite}#icon-theme`} />
          </svg>
        </div>
        <ul className={css.userInfo}>
          <li className={css.userName}>Ivetta</li>
          <li className={css.userAvatart}>Avatar</li>
        </ul>
      </div>
    </div>
  );
}
