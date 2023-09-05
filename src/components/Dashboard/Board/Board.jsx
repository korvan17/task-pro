import React from 'react';
import sprite from '../../../icons/sprite.svg';
import css from './Board.module.css';

import { useDispatch } from 'react-redux';
import { deleteBoard } from '../../../redux/boards/operations';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';
import { selectCurrentBoard } from 'redux/boards/selectors';
import { getTheme } from 'redux/auth/authSelectors';

const Board = ({ board, editBoard }) => {
  const currentBoard = useSelector(selectCurrentBoard);

  const dispatch = useDispatch();
  const theme = useTheme();
  const userTheme = useSelector(getTheme);
  const navigate = useNavigate();

  const deleteBoardBtn = boardId => {
    dispatch(deleteBoard(boardId));
    navigate('/home');
  };

  // const handleBoardClick = boardId => {
  //   setSelectedBoard(boardId);

  //   console.log('handleBoardClick');
  //   console.log(boardId);
  // };
  // console.log(currentBoard?._id, board._id);

  const setBoardTheme = () => {
    switch (userTheme) {
      case 'light':
        return [css.lightSelectedBoard, css.lightBoard];
      case 'dark':
        return [css.selectedBoard, css.board];
      case 'violet':
        return [css.violetSelectedBoard, css.violetBoard];
      default:
        return [css.lightSelectedBoard, css.lightBoard];
    }
  };

  return (
    <li
      key={board._id}
      // onClick={handleBoardClick(_id)}
      className={` ${
        currentBoard?._id === board._id ? setBoardTheme()[0] : ''
      }`}
    >
      <Link to={board._id} className={setBoardTheme()[1]}>
        <div className={css.boardIconTittleContainer}>
          <svg
            style={{
              stroke:
                currentBoard?._id === board._id
                  ? theme.sidebar.selectedBoardIconFill
                  : theme.sidebar.boardIconFill,
            }}
            width="18"
            height="18"
            className={css.boardIcon}
          >
            <use xlinkHref={`${sprite}#${board.icon}`} />
          </svg>
          <p
            style={{
              color:
                currentBoard?._id === board._id
                  ? theme.sidebar.selectedBoardTitleColor
                  : theme.sidebar.boardTitleColor,
            }}
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
