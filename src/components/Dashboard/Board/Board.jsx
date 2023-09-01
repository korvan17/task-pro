import React from 'react';
import sprite from '../../../icons/sprite.svg';
import css from './Board.module.css';

import { useDispatch } from 'react-redux';
import { deleteBoard } from '../../../redux/boards/operations';

const Board = ({ board, toggleModal }) => {
  const dispatch = useDispatch();

  const deleteBoardBtn = boardId => {
    dispatch(deleteBoard(boardId));
  };

  return (
    <li className={css.board} key={board._id}>
      <div className={css.boardIconTittleContainer}>
        <svg width="18" height="18" className={css.boardIcon}>
          <use xlinkHref={`${sprite}#${board.icon}`} />
        </svg>
        <p className={css.boardTittle}>{board.title}</p>
      </div>

      <div className={css.boardBtnContainer}>
        <button type="button" className={css.boardBtn} onClick={toggleModal}>
          <svg width="16" height="16" className={css.boardIconBtns}>
            <use xlinkHref={`${sprite}#icon-edit`} />
          </svg>
        </button>
        <button
          type="button"
          className={css.boardBtn}
          onClick={() => deleteBoardBtn(board._id)}
        >
          <svg width="16" height="16" className={css.boardIconBtns}>
            <use xlinkHref={`${sprite}#icon-trash`} />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default Board;
