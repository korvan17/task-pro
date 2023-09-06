import React from 'react';
import sprite from '../../../../icons/sprite.svg';
import css from './CardIcons.module.css';
import { useTheme } from '@emotion/react';

export default function DeadlineIcon() {
  const theme = useTheme();
  return (
    <svg
      style={{ stroke: theme.card.bellIconFill }}
      className={`${css.icon} ${css.iconBell}`}
      width="16"
      height="16"
    >
      <use xlinkHref={`${sprite}#icon-bell`} />
    </svg>
  );
}
