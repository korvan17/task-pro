import React from 'react';
import { useState } from 'react';
import css from './Card.module.css';
import convertDate from 'utlis/convertDate';
import { CardIconsList, DeadlineIcon } from './CardIcons';
import CardAdditionInfList from './CardAdditionInfList/CardAdditionInfList';

// ! set a constant later
const MAX_DESC_VISIBLE_LEN = 86;

export default function Card({ title, desc, priority, deadline }) {
  const [isDescHidden, setDescHidden] = useState('true');

  const showDotsToHide = desc.length > MAX_DESC_VISIBLE_LEN;

  const toggleDesc = () => {
    setDescHidden(!isDescHidden);
  };

  const displayedDesc = isDescHidden
    ? desc.slice(0, MAX_DESC_VISIBLE_LEN)
    : desc;

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
        <p className={`${css.desc} ${!isDescHidden && css.descShown}`}>
          {displayedDesc}
          <span
            onClick={toggleDesc}
            className={`${css.dotsToHide} ${!isDescHidden && css.dotsOnShown}`}
          >
            {isDescHidden ? (showDotsToHide ? '...' : '') : ' hide'}
          </span>
        </p>
        <div className={css.additionWrapper}>
          <CardAdditionInfList deadline={deadline} priority={priority} />

          {/* icon-beel shows if deadline day is today */}
          {isDeadlineToday && <DeadlineIcon />}

          <CardIconsList
            className={`${css.iconButtsList} ${
              isDeadlineToday && css.iconButtsList_Deadline
            }`}
          />
        </div>
      </div>
    </div>
  );
}
