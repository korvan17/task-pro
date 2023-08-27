import React from 'react';
import sprite from '../../../../icons/sprite.svg'
import css from './CardIcons.module.css'

export default function DeadlineIcon() {
  return (
    <svg className={`${css.icon} ${css.iconBell}`} width="16" height="16">
      <use xlinkHref={`${sprite}#icon-bell`} />
    </svg>
  );
}
