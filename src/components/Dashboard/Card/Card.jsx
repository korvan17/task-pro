import React from 'react';
import { useState } from 'react';

import css from './Card.module.css';
import convertDate from 'utlis/convertDate';
import { CardIconsList, DeadlineIcon } from './CardIcons';
import CardAdditionInfList from './CardAdditionInfList/CardAdditionInfList';
import { useTheme } from '@emotion/react';
import { selectCurrentBoard } from 'redux/boards/selectors';
import { useSelector } from 'react-redux';

// ! set a constant later
const MAX_DESC_VISIBLE_LEN = 86;

export default function Card({
  cardId,
  columnId,
  title,
  desc,
  priority,
  deadline,
  toggleModalCard,
  deleteCard,
}) {
  const [isDescHidden, setDescHidden] = useState('true');

  const currentBoard = useSelector(selectCurrentBoard);
  const currentBarardColumns = currentBoard.columns;
  const columns = currentBarardColumns.map(el => ({
    title: el.title,
    id: el._id,
  }));

  const theme = useTheme();

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

  // const priorityStyle = {
  //   '--priority-color': getColor(),
  // };

  const currentDate = convertDate(new Date());
  const date = new Date(deadline);

  const convertedPropsDate = convertDate(date);

  const isDeadlineToday = currentDate === convertedPropsDate;

  return (
    <div
      style={{ backgroundColor: theme.card.background }}
      className={css.overWrapper}
    >
      <div
        style={{
          backgroundColor: theme.card.background,
          borderLeft: `4px solid ${getColor()}`,
        }}
        className={css.wrapper}
      >
        {/*  style={priorityStyle} */}
        <h4 style={{ color: theme.card.titleColor }} className={css.title}>
          {title}
        </h4>
        <p
          style={{ color: theme.card.textColor }}
          className={`${css.desc} ${!isDescHidden && css.descShown}`}
        >
          {displayedDesc}
          <span
            onClick={toggleDesc}
            className={`${css.dotsToHide} ${!isDescHidden && css.dotsOnShown}`}
          >
            {isDescHidden ? (showDotsToHide ? '...' : '') : ' hide'}
          </span>
        </p>
        <div
          style={{ borderTopColor: theme.card.separatorLineColor }}
          className={css.additionWrapper}
        >
          <CardAdditionInfList
            deadline={convertedPropsDate}
            priority={priority}
          />

          {/* icon-beel shows if deadline day is today */}
          {isDeadlineToday && <DeadlineIcon />}

          <CardIconsList
            columns={columns}
            cardId={cardId}
            columnId={columnId}
            toggleModalCard={toggleModalCard}
            deleteCard={deleteCard}
            className={`${css.iconButtsList} ${
              isDeadlineToday && css.iconButtsList_Deadline
            }`}
          />
        </div>
      </div>
    </div>
  );
}
