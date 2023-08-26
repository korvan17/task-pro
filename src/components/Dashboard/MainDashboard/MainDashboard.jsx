import css from './MainDashboard.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Card from '../Card/Card';

export const MainDashboard = ({ id }) => {
  const board = useSelector();

  return (
    <>
      <div className={css.board}>
        {board.length > 0 && (
          <ul className={css.columnList}>
            {board.map(column => (
              <li key={column._id}>
                <Card column={column} />
              </li>
            ))}
          </ul>
        )}

        <div className={''}>{/* кнопка календарь */}</div>
      </div>
      {/* модалка */}
    </>
  );
};
