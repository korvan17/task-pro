import React from 'react';
import css from './IconButton.module.css';

export default function IconButton({
  svg,
  className,
  size,
  pushButton,
  type = 'button',
}) {
  return (
    <button
      type={type}
      onClick={() => pushButton('id')}
      className={`${className} ${css.button}`}
      style={{ height: size }}
    >
      <svg width={size} height={size}>
        {svg}
      </svg>
    </button>
  );
}
