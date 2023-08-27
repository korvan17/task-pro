import React from 'react';
import css from './CardAdditionInfList.module.css'

export default function CardAdditionInfList({priority, deadline}) {
  return (
    <ul className={css.additionList}>
      <li className={css.additioItem}>
        <p className={css.additionInfoHeading}>priority</p>
        <p
          className={`${css.priority} ${css.additionInfoSubheading}`}
        >
          {priority}
        </p>
      </li>
      <li className={css.additioItem}>
        <p className={css.additionInfoHeading}>deadline</p>
        <p className={css.additionInfoSubheading}>{deadline}</p>
      </li>
    </ul>
  );
}
