import React from 'react';
import css from './CardAdditionInfList.module.css';
import { useTheme } from '@emotion/react';

export default function CardAdditionInfList({ priority, deadline }) {
  const theme = useTheme();
  return (
    <ul className={css.additionList}>
      <li className={css.additioItem}>
        <p
          style={{ color: theme.card.priorityColor }}
          className={css.additionInfoHeading}
        >
          priority
        </p>
        <p
          style={{ color: theme.card.priorityTextColor }}
          className={`${css.priority} ${css.additionInfoSubheading}`}
        >
          {priority}
        </p>
      </li>
      <li className={css.additioItem}>
        <p
          style={{ color: theme.card.deadlineColor }}
          className={css.additionInfoHeading}
        >
          deadline
        </p>
        <p
          style={{ color: theme.card.deadlineDateColor }}
          className={css.additionInfoSubheading}
        >
          {deadline}
        </p>
      </li>
    </ul>
  );
}
