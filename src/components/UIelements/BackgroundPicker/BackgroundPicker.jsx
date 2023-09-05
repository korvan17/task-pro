import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import css from './BackgroundPicker.module.css';
import IconForModal from '../IcansForModal/IconsForModal';
// import * as BackgroundImages from '../../../icons/backgounds';

const BackgroundPicker = ({
  onSelectedBackgroundChange,
  defaultBackground,
}) => {
  const [selectedBackground, setSelectedBackground] =
    useState(defaultBackground);

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
        <IconForModal
          handleBackground={handleBackground}
          selectedBackground={selectedBackground}
        />
      </div>
    </div>
  );
};

export default BackgroundPicker;
