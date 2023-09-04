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
import { setColumnId, setModalStatus } from 'redux/modalSlice';
import { deleteColumn } from 'redux/columns/columnsOperations';
import { useTheme } from '@emotion/react';

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
    dispatch(deleteCard(id));
  };

  const createCard = columnId => {
    console.log(columnId);
    setShowModalCard(!showModalCard);
    dispatch(setModalStatus(false));
    dispatch(setColumnId(columnId));
  };

  const editCard = () => {
    setShowModalCard(!showModalCard);
    dispatch(setModalStatus(true));
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

  const toggleModalCard = () => {
    setShowModalCard(!showModalCard);
  };

  const handleDeleteColumn = id => {
    dispatch(deleteColumn(id));
  };

  return (
    <section className={css.board__main}>
      {board?.columns[0]?._id !== undefined && (
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
                      columnId={column._id}
                      toggleModalCard={editCard}
                      deleteCard={handleDeleteCard}
                      title={card.title}
                      desc={card.description}
                      priority={card.priority}
                      deadline={card.deadline}
                    />
                  </li>
                ))}
              </ul>
              <div className={css.button__column}>
                <AddIconButton
                  columnId={column._id}
                  className={css.btn__card}
                  pushButton={createCard}
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
    </section>
  );
}
