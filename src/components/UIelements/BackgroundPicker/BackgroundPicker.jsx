import React, { useState } from 'react';
import css from './BackgroundPicker.module.css';
import * as BackgroundImages from '../../../icons/backgounds';

const BackgroundPicker = ({ onSelectedBackgroundChange }) => {
  const backgrounds = [
    { id: 1, name: 'tree' },
    { id: 2, name: 'triler' },
    { id: 3, name: 'spheres' },
    { id: 4, name: 'semimoon' },
    { id: 5, name: 'sea' },
    { id: 6, name: 'rocks' },
    { id: 7, name: 'mountains' },
    { id: 8, name: 'leaves' },
    { id: 9, name: 'fullmoon' },
    { id: 10, name: 'flowers' },
    { id: 11, name: 'clouds' },
    { id: 12, name: 'cave' },
    { id: 13, name: 'boat' },
    { id: 14, name: 'balloonFar' },
    { id: 15, name: 'balloonClose' },
  ];

  const [selectedBackground, setSelectedBackground] = useState(null);

  const handleBackground = backgroundName => {
    setSelectedBackground(backgroundName);
    onSelectedBackgroundChange(backgroundName);
  };

  return (
    <div className={css.backgroundsPickerBlock}>
      <span className={css.backgroundsTitle}>Background</span>
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
              src={BackgroundImages[background.name]?.tablet}
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
