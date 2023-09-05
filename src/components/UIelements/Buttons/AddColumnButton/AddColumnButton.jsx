import React from 'react';
import Buttons from '../Button';
import css from './AddColumnButton.module.css';
import sprite from '../../../../icons/sprite.svg';
import { useTheme } from '@emotion/react';

export default function AddColumnButton({
  columnId,
  buttonType = 'button',
  children,
  className,
  pushButton,
}) {
  const theme = useTheme();
  return (
    <Buttons
      columnId={columnId}
      pushButton={pushButton}
      className={` ${className} ${children ? css.button : css.buttonNoTxt}`}
      buttonType={buttonType}
    >
      <svg
        style={{
          backgroundColor: theme.popUp.buttonIconBackground,
          stroke: theme.popUp.buttonIconPlusFill,
        }}
        className={`${css.icon} ${!children && css.iconNoTxt}`}
        width={28}
        height={28}
      >
        <use xlinkHref={`${sprite}#icon-add`} />
      </svg>
      {children}
    </Buttons>
  );
}
