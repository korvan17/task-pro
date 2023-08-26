import { useState } from 'react';
import iconDefs from '../../../icons/sprite.svg';
import css from './Theme.module.css';

export default function Theme() {
  const themes = ['light', 'dark', 'violet'];
  const [isThemeListVisible, setIsThemeListVisible] = useState(false);

  const toggleThemeList = () => {
    setIsThemeListVisible(!isThemeListVisible);
  };

  return (
    <div className={css.themeContainer}>
      <button className={css.themeChangerButton} onClick={toggleThemeList}>
        <h3>Theme</h3>
        <svg className={css.themeChangerIcon} width="16" height="16">
          <use xlinkHref={`${iconDefs}#icon-theme`} />
        </svg>
      </button>
      <div className={`${css.themeListContainer}`} hidden={!isThemeListVisible}>
        <ul className={css.themeList}>
          {themes.map(theme => (
            <li key={theme + 1} className={css.themeListButton}>
              <button
                style={{ color: 'red' }}
                className={css.themeListButton}
                onClick={toggleThemeList}
              >
                {theme[0].toUpperCase() + theme.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
