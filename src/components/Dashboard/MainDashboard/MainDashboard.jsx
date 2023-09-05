import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { getBoardByID } from 'redux/boards/operations';
import { selectCurrentBoard } from 'redux/boards/selectors';
import { setColumnId, setModalStatus } from 'redux/modalSlice';
import { deleteColumn } from 'redux/columns/columnsOperations';
import { deleteCard, moveCard } from '../../../redux/сard/сardOperations';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import css from './MainDashboard.module.css';
import { useParams } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { setCardId } from '../../../redux/modalSlice';
import {
  AddEditCard,
  AddEditColumn,
  AddIconButton,
  Card,
  Column,
} from 'components';
import { selectFilter } from '../../../redux/filterSlice';

export function MainDashboard() {
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const [showModalColumn, setShowModalColumn] = useState(false);
  const [showModalCard, setShowModalCard] = useState(false);
  const [currentColumnId, setCurrentColumnId] = useState(null);
  const filterCards = useSelector(selectFilter);

  const board = useSelector(selectCurrentBoard);
  const isLoadingColumns = useSelector(state => state.columns.isLoading);
  const isLoadingCards = useSelector(state => state.cards.isLoading);
  const theme = useTheme();

  useEffect(() => {
    if (
      isLoadingCards === true ||
      isLoadingColumns === true ||
      boardId !== ''
    ) {
      dispatch(getBoardByID(boardId));
    }
  }, [
    isLoadingColumns,
    isLoadingCards,
    // display,
    boardId,
    dispatch,
  ]);

  const handleDeleteCard = (columnId, cardId) => {
    dispatch(setColumnId(columnId));
    dispatch(deleteCard(cardId));
  };

  const createCard = columnId => {
    dispatch(setModalStatus(false));
    dispatch(setColumnId(columnId));
    setShowModalCard(true);
  };

  const editCard = (columnId, cardId) => {
    dispatch(setColumnId(columnId));
    dispatch(setCardId(cardId));
    dispatch(setModalStatus(true));
    setShowModalCard(true);
  };

  const createColumn = () => {
    dispatch(setModalStatus(false));
    setShowModalColumn(true);
  };

  const editColumn = id => {
    setCurrentColumnId(id);
    dispatch(setModalStatus(true));
    setShowModalColumn(true);
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

  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }
    if (result.type === 'CARD') {
      console.log('result - ', result);
      dispatch(
        moveCard({
          cardId: result.draggableId,
          toColumnId: result.destination.droppableId,
          toIndex: result.destination.index,
        })
      );
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {board?.columns[0]._id ? (
        <div className={css.board__main}>
          <ul className={css.column__item}>
            {board?.columns.map((column, index) => (
              <li key={column._id} className={css.column__list}>
                <Column
                  id={column._id}
                  editColumn={editColumn}
                  deleteColumn={handleDeleteColumn}
                  title={column.title}
                />
                <Droppable droppableId={column._id} type="CARD">
                  {provided => (
                    <ul
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={css.card__item}
                    >
                      {column.cards
                        .filter(card =>
                          filterCards === ''
                            ? true
                            : card.priority === filterCards
                        )
                        .map((card, cardIndex) => (
                          <Draggable
                            key={card._id}
                            draggableId={card._id}
                            index={cardIndex}
                          >
                            {provided => (
                              <li
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <Card
                                  cardId={card._id}
                                  columnId={column._id}
                                  toggleModalCard={editCard}
                                  deleteCard={handleDeleteCard}
                                  title={card.title}
                                  desc={card.description}
                                  priority={card.priority}
                                  deadline={card.deadline}
                                />
                              </li>
                            )}
                          </Draggable>
                        ))}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
                <div className={css.button__column}>
                  <AddIconButton
                    columnId={column._id}
                    className={css.btn__card}
                    pushButton={() => createCard(column._id)}
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
          <div>
            <AddIconButton
              pushButton={createColumn}
              className={css.btn__alonecolumn}
            >
              <span
                style={{ color: theme.popUp.buttonTextColor }}
                className={css.btn__text}
              >
                Add another column
              </span>
            </AddIconButton>
          </div>
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
      ) : (
        <div className={css.board__main}>
          <AddIconButton
            pushButton={createColumn}
            className={css.btn__alonecolumn}
          >
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
        </div>
      )}
    </DragDropContext>
  );
}
