import {
  AddEditCard,
  AddEditColumn,
  AddIconButton,
  Card,
  Column,
} from 'components';
import css from './MainDashboard.module.css';
import { useState } from 'react';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import { deleteCard } from '../../../redux/сard/сardOperations';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { getBoardByID } from 'redux/boards/operations';
import { selectCurrentBoard } from 'redux/boards/selectors';
import { useParams } from 'react-router-dom';
import { selectDisplays } from 'redux/displayType/displaySelectors';
import { setModalStatus } from 'redux/modalSlice';
import { deleteColumn } from 'redux/columns/columnsOperations';
import { useTheme } from '@emotion/react';

// 64f0a120f65c664a596fe318
// 64f0a158f65c664a596fe31c
// 64f0a169f65c664a596fe320
export function MainDashboard() {
  const [showModalColumn, setShowModalColumn] = useState(false);
  const [showModalCard, setShowModalCard] = useState(false);
  const [currentColumnId, setCurrentColumnId] = useState(null);
  const board = useSelector(selectCurrentBoard);
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const display = useSelector(selectDisplays);
  const isLoadingColumns = useSelector(state => state.columns.isLoading);
  const isLoadingCards = useSelector(state => state.cards.isLoading);
  const theme = useTheme();

  useEffect(() => {
    dispatch(getBoardByID(boardId));
  }, [isLoadingColumns, isLoadingCards, display, boardId, dispatch]);

  useEffect(() => {
    dispatch(getBoardByID(boardId));
  }, [dispatch, boardId]);

  const handleDeleteCard = id => {
    console.log('deleteCard');
    dispatch(deleteCard(id));
  };

  const toggleModalCard = () => {
    setShowModalCard(!showModalCard);
  };

  const createColumn = () => {
    setShowModalColumn(!showModalColumn);
    dispatch(setModalStatus(false));
  };

  const editColumn = id => {
    setCurrentColumnId(id);
    setShowModalColumn(!showModalColumn);
    dispatch(setModalStatus(true));
  };

  const toggleModalColumn = () => {
    setShowModalColumn(!showModalColumn);
  };

  const handleDeleteColumn = id => {
    dispatch(deleteColumn(id));
  };

  return (
    <div className={css.board__main}>
      {board?.columns.length > 0 && (
        <ul className={css.column__item}>
          {board.columns.map(column => (
            <li key={column._id} className={css.column__list}>
              <Column
                id={column._id}
                editColumn={editColumn}
                deleteColumn={handleDeleteColumn}
                title={column.title}
              />
              <ul className={css.card__item}>
                {column.cards.map(card => (
                  <li key={card._id}>
                    <Card
                      toggleModalCard={toggleModalCard}
                      deleteCard={handleDeleteCard}
                      title={card.title}
                      desc={card.description}
                      priority={card.priority}
                      deadline={card.deadline}
                    />
                  </li>
                ))}
                <div className={css.button__column}>
                  <AddIconButton
                    className={css.btn__card}
                    pushButton={toggleModalCard}
                    theme="dark"
                  >
                    <span
                      style={{ color: theme.popUp.buttonTextColor }}
                      className={css.btn__text}
                    >
                      Add another card
                    </span>
                  </AddIconButton>
                </div>
              </ul>
            </li>
          ))}
        </ul>
      )}
      <AddIconButton pushButton={createColumn} className={css.btn__alonecolumn}>
        <span
          style={{ color: theme.popUp.buttonTextColor }}
          className={css.btn__text}
        >
          Add another column
        </span>
      </AddIconButton>
      {showModalColumn && (
        <BasicModal onClose={createColumn}>
          <AddEditColumn
            onClose={toggleModalColumn}
            columnId={currentColumnId}
          />
        </BasicModal>
      )}
      {showModalCard && (
        <BasicModal onClose={toggleModalCard}>
          <AddEditCard onClose={toggleModalCard} />
        </BasicModal>
      )}
    </div>
  );
}
