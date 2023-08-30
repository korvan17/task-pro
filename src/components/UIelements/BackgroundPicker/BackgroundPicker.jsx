import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import css from './BackgroundPicker.module.css';
// import * as BackgroundImages from '../../../icons/backgounds';

const BackgroundPicker = ({ onSelectedBackgroundChange }) => {
  const backgrounds = [
    { id: 1, name: 'default' },
    { id: 2, name: 'tree' },
    { id: 3, name: 'triler' },
    { id: 4, name: 'spheres' },
    { id: 5, name: 'semimoon' },
    { id: 6, name: 'sea' },
    { id: 7, name: 'rocks' },
    { id: 8, name: 'mountains' },
    { id: 9, name: 'leaves' },
    { id: 10, name: 'fullmoon' },
    { id: 11, name: 'flowers' },
    { id: 12, name: 'clouds' },
    { id: 13, name: 'cave' },
    { id: 14, name: 'boat' },
    { id: 15, name: 'balloonFar' },
    { id: 16, name: 'balloonClose' },
  ];

  const [selectedBackground, setSelectedBackground] = useState(null);

  const handleBackground = backgroundName => {
    setSelectedBackground(backgroundName);
    onSelectedBackgroundChange(backgroundName);
  };

  const theme = useTheme();

  return (
    <div className={css.backgroundsPickerBlock}>
      <span
        style={{ color: theme.popUp.backgroundTextColor }}
        className={css.backgroundsTitle}
      >
        Background
      </span>
      <div className={css.backgroundsField}>
        {backgrounds.map((background, index) => (
          <button
            type="button"
            key={background.id}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 0,
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
            onClick={() => handleBackground(background.name)}
          >
            <img
              src={require(`../../../images/${background.name}-icon-2x-min.png`)}
              alt={background.name}
              className={`${css.backgroundsImg} ${
                selectedBackground === background.name
                  ? css.selectedBackground
                  : ''
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default BackgroundPicker;
