import React from 'react';
import sprite from '../../../icons/sprite.svg';
import css from './Board.module.css';

import { useDispatch } from 'react-redux';
import { deleteBoard } from '../../../redux/boards/operations';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';

const Board = ({ board, editBoard }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const deleteBoardBtn = boardId => {
    dispatch(deleteBoard(boardId));
  };

  return (
    <li key={board._id}>
      <Link to={board._id} className={css.board}>
        <div className={css.boardIconTittleContainer}>
          <svg
            style={{ stroke: theme.sidebar.boardIconFill }}
            width="18"
            height="18"
            className={css.boardIcon}
          >
            <use xlinkHref={`${sprite}#${board.icon}`} />
          </svg>
          <p
            style={{ color: theme.sidebar.boardTitleColor }}
            className={css.boardTittle}
          >
            {board.title}
          </p>
        </div>

        <div className={css.boardBtnContainer}>
          <button
            type="button"
            className={css.boardBtn}
            onClick={() => editBoard(board._id)}
          >
            <svg
              style={{ stroke: theme.sidebar.boardIconFill }}
              width="16"
              height="16"
              className={css.boardIconBtns}
            >
              <use xlinkHref={`${sprite}#icon-edit`} />
            </svg>
          </button>
          <button
            type="button"
            className={css.boardBtn}
            onClick={e => {
              e.preventDefault();
              deleteBoardBtn(board._id);
            }}
          >
            <svg
              style={{ stroke: theme.sidebar.boardIconFill }}
              width="16"
              height="16"
              className={css.boardIconBtns}
            >
              <use xlinkHref={`${sprite}#icon-trash`} />
            </svg>
          </button>
        </div>
      </Link>
    </li>
  );
};

export default Board;
