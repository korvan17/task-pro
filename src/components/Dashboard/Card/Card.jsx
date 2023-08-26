import React from 'react';
import css from './Card.module.css';
import iconDefs from '../../../icons/sprite.svg';
import convertDate from 'utlis/convertDate';
import { IconButton } from 'components';
import CardMoveModal from './CardMoveModal/CardMoveModal';
import { convertDate } from 'utlis';

export default function Card({ title, desc, priority, deadline }) {

  const convertedPriority = priority.toLowerCase();

  const getColor = () => {
    switch (convertedPriority) {
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
            <p
              className={`${css.priority} ${css.additionInfoSubheading}`}
              style={priorityStyle}
            >
              {priority}
            </p>
          </div>
          <div className={css.additionInfo}>
            <p className={css.additionInfoHeading}>deadline</p>
            <p className={css.additionInfoSubheading}>{deadline}</p>
          </div>

          {isDeadlineToday && (
            <svg
              className={`${css.icon} ${css.iconBell}`}
              width="16"
              height="16"
            >
              <use xlinkHref={`${iconDefs}#icon-bell`} />
            </svg>
          )}

          <ul
            className={`${css.iconButtsList} ${
              isDeadlineToday && css.iconButtsList_Deadline
            }`}
          >
            <li className={css.iconButtonItem}>
              <CardMoveModal
                svg={<use xlinkHref={`${iconDefs}#icon-move`} />}
                size={16}
                className={css.icon}
              />
            </li>
            <li className={css.iconButtonItem}>
              <IconButton
                svg={<use xlinkHref={`${iconDefs}#icon-edit`} />}
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
