import React, { useState, useRef } from 'react';
import { Tooltip } from '@mui/material';
import iconDefs from '../../../icons/symbol-defs-edit.svg';

import css from './CardMoveModal.module.css';

export default function CardMoveModal({ svg, className, size }) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const tooltipTimeout = useRef(null);

  const openToolTip = () => {
    setTooltipOpen(true);
  };

  const closeToolTip = () => {
    setTooltipOpen(false);
  };

  const handleMouseLeave = () => {
    tooltipTimeout.current = setTimeout(closeToolTip, 3000);
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
          <button className={css.button}>
            <span className={css.iconTxt}>In progress</span>
            <svg className={css.icon} width={16} height={16}>
              <use xlinkHref={`${iconDefs}#icon-move`} />
            </svg>
          </button>
          <button className={css.button}>
            <span className={css.iconTxt}>Done</span>
            <svg className={css.icon} width={16} height={16}>
              <use xlinkHref={`${iconDefs}#icon-move`} />
            </svg>
          </button>
        </div>
      }
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: '#fff',
            boxShadow: '0px 4px 16px 0px rgba(17, 17, 17, 0.10)',
            maxWidth: '135px',
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
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <svg className={className} width={size} height={size}>
          {svg}
        </svg>
      </button>
    </Tooltip>
  );
}
