import { useState } from 'react';
import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';

import iconDefs from '../../../icons/sprite.svg';
import css from './Theme.module.css';
import { updateTheme } from '../../../redux/auth/authOperations';
import { getTheme } from 'redux/auth/authSelectors';

export default function Theme() {
  const selectedTheme = useSelector(getTheme);
  const dispatch = useDispatch();
  const themes = ['light', 'dark', 'violet'];
  const [isThemeListVisible, setIsThemeListVisible] = useState(false);

  const theme = useTheme();

  const toggleThemeList = () => {
    setIsThemeListVisible(!isThemeListVisible);
  };

  const hadleThemeSelect = newUserTheme => {
    dispatch(updateTheme(newUserTheme));
    // console.log(newUserTheme);
  };

  return (
    <div className={css.themeContainer}>
      <button
        style={{ color: theme.header.themeSelectorColor }}
        className={css.themeChangerButton}
        onClick={toggleThemeList}
      >
        <h3>Theme</h3>
        <svg
          style={{ stroke: theme.header.themeSelectorColor }}
          className={`${css.themeChangerIcon}`}
          width="16"
          height="16"
        >
          <use xlinkHref={`${iconDefs}#icon-theme`} />
        </svg>
      </button>
      <div
        style={{ background: theme.header.themeListBackground }}
        className={`${css.themeListContainer}`}
        hidden={!isThemeListVisible}
      >
        <ul className={css.themeList}>
          {themes.map(themeName => (
            <li key={themeName + 1} className={css.themeListButton}>
              <button
                style={
                  selectedTheme === themeName
                    ? { color: theme.header.themeListItemHoverColor }
                    : { color: theme.header.themeListItemColor }
                }
                className={css.themeListButton}
                onClick={() => {
                  if (selectedTheme === themeName) {
                    return;
                  } else {
                    hadleThemeSelect(themeName);
                  }
                }}
              >
                {/* {themeName[0].toUpperCase() + themeName.slice(1)} */}
                {themeName}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
