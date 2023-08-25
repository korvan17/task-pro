import React from 'react';
import css from './Card.module.css';
import iconDefs from '../../icons/symbol-defs-edit.svg';
import convertDate from 'utlis/convertDate';
import { IconButton } from 'components';

export default function Card({ title, desc, priority, deadline }) {
  const getColor = () => {
    switch (priority) {
      case 'high':
        return '#bedbb0';
      case 'medium':
        return '#e09cb5';
      case 'low':
        return '#8fa1d0';
      default:
        return '#bababa';
    }
  };

  const priorityStyle = {
    '--priority-color': getColor(),
  };

  const currentDate = convertDate(new Date());

  const isDeadlineToday = currentDate === deadline;

  return (
    <div className={css.overWrapper}>
      <div className={css.wrapper} style={priorityStyle}>
        <h4 className={css.title}>{title}</h4>
        <p className={css.desc}>{desc}</p>
        <div className={css.additionWrapper}>
          <div className={css.additionInfo}>
            <p className={css.additionInfoHeading}>priority</p>
            <p className={css.priority} style={priorityStyle}>
              {priority}
            </p>
          </div>
          <div className={css.additionInfo}>
            <p className={css.additionInfoHeading}>deadline</p>
            <p>{deadline}</p>
          </div>

          {isDeadlineToday && (
            <svg
              className={`${css.icon} ${css.iconBell}`}
              stroke="rgba(82, 85, 188, 1)"
              width="16"
              height="16"
            >
              <use xlinkHref={`${iconDefs}#icon-bell`} />
            </svg>
          )}

          <ul className={css.iconButtsList}>
            <li className={css.iconButtonItem}>
              <IconButton
                svg={<use xlinkHref={`${iconDefs}#icon-move`} />}
                size={16}
                className={css.icon}
              />
            </li>
            <li className={css.iconButtonItem}>
              <IconButton
                svg={<use xlinkHref={`${iconDefs}#icon-pencil`} />}
                size={16}
                className={css.icon}
              />
            </li>
            <li className={css.iconButtonItem}>
              <IconButton
                svg={<use xlinkHref={`${iconDefs}#icon-trash`} />}
                size={16}
                className={css.icon}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
