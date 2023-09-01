import React from 'react';
import Buttons from '../Button';
import css from './AddIconButton.module.css';
import sprite from '../../../../icons/sprite.svg';

export default function AddIconButton({
  buttonType = 'button',
  children,
  className,
}) {
  return (
    <Buttons
      className={`${className} ${children ? css.button : css.buttonNoTxt}`}
      buttonType={buttonType}
    >
      <svg
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
