import React from 'react';
import css from './IconButton.module.css';

export default function IconButton({ svg, className, size, pushButton }) {
  return (
    // style is temp solution
    <button
      type="button"
      onClick={() => pushButton('id')}
      className={css.button}
      style={{ height: size }}
    >
      <svg className={className} width={size} height={size}>
        {svg}
      </svg>
    </button>
  );
}
