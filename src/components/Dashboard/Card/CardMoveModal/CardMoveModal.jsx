import React, { useState, useRef } from 'react';
import { Tooltip } from '@mui/material';
import { useDispatch } from 'react-redux';

import iconDefs from '../../../../icons/sprite.svg';
import css from './CardMoveModal.module.css';
import { moveCard } from 'redux/сard/сardOperations';

export default function CardMoveModal({
  svg,
  className,
  size,
  columns,
  cardId,
  cardsColumnId,
}) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const tooltipTimeout = useRef(null);
  const dispatch = useDispatch();

  const onClickBtn = (cardId, toColumnId, toIndex) => {
    dispatch(
      moveCard({
        cardId,
        toColumnId,
        toIndex,
      })
    );
  };

  const openToolTip = () => {
    setTooltipOpen(true);
  };

  const closeToolTip = () => {
    setTooltipOpen(false);
  };

  const handleMouseEnter = () => {
    clearTimeout(tooltipTimeout.current);
  };

  const handleTooltipMouseEnter = () => {
    clearTimeout(tooltipTimeout.current);
  };
  return (
    <Tooltip
      title={
        <div className={css.tooltip} onMouseEnter={handleTooltipMouseEnter}>
          {columns.map(({ columnTitle, columnId }) => {
            if (columnId === cardsColumnId) {
              return null;
            }
            return (
              <button
                key={columnId}
                className={css.button}
                onClick={() => onClickBtn(cardId, columnId, 0)}
              >
                <span className={css.iconTxt}>{columnTitle}</span>
                <svg className={css.icon} width={16} height={16}>
                  <use xlinkHref={`${iconDefs}#icon-move`} />
                </svg>
              </button>
            );
          })}
        </div>
      }
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: '#fff',
            boxShadow: '0px 4px 16px 0px rgba(17, 17, 17, 0.10)',
            padding: '18px',
          },
        },
      }}
      open={tooltipOpen}
      onClose={closeToolTip}
    >
      <button
        className={css.button}
        style={{ height: size }}
        onClick={openToolTip}
        onMouseEnter={handleMouseEnter}
      >
        <svg className={className} width={size} height={size}>
          {svg}
        </svg>
      </button>
    </Tooltip>
  );
}
