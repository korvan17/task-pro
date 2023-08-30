import React from 'react';
import sprite from '../../../icons/sprite.svg';
import css from './Board.module.css';

// import { useDispatch } from 'react-redux';
// import { deleteContactThunk } from 'redux/contacts/contactsOperations';

const Board = ({ _id, icon, title, toggleModal }) => {
  return (
    <li className={css.board} key={_id}>
      <div className={css.boardIconTittleContainer}>
        <svg width="18" height="18" className={css.boardIcon}>
          <use xlinkHref={`${sprite}#${icon}`} />
        </svg>
        <p className={css.boardTittle}>{title}</p>
      </div>
      
      <div className={css.boardBtnContainer}>
        <button
          type="button"
          className={css.boardBtn}
          onClick={() => toggleModal()}
        >
          <svg width="16" height="16" className={css.boardIconBtns}>
            <use xlinkHref={`${sprite}#icon-edit`} />
          </svg>
        </button>
        <button type="button" className={css.boardBtn} onClick={() => {}}>
          <svg width="16" height="16" className={css.boardIconBtns}>
            <use xlinkHref={`${sprite}#icon-trash`} />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default Board;
