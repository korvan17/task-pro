import React from 'react';
import css from './IconButton.module.css';

export default function IconButton({
  svg,
  className,
  size,
  onClick,
  type = 'button',
}) {
  return (
    <button
      className={`${className} ${css.button}`}
      style={{ height: size }}
      type="button"
      onClick={onClick}
    >
      <svg width={size} height={size}>
        {svg}
      </svg>
    </button>
  );
}
