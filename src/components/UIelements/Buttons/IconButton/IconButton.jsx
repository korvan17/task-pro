import React from 'react';
import css from './IconButton.module.css';

export default function IconButton({ svg, className, size }) {
  return (
    // style is temp solution
    <button className={css.button} style={{ height: size }}>
      <svg className={className} width={size} height={size}>
        {svg}
      </svg>
    </button>
  );
}
