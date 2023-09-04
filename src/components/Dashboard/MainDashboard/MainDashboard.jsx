import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { getBoardByID } from 'redux/boards/operations';
import { selectCurrentBoard } from 'redux/boards/selectors';
import { selectDisplays } from 'redux/displayType/displaySelectors';
import { setColumnId, setModalStatus } from 'redux/modalSlice';
import { deleteColumn } from 'redux/columns/columnsOperations';
import { deleteCard } from '../../../redux/сard/сardOperations';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import css from './MainDashboard.module.css';
import { useParams, useSearchParams } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { setNewBoardCreate } from '../../../redux/modalSlice';
import {
  AddEditCard,
  AddEditColumn,
  AddIconButton,
  Card,
  Column,
} from 'components';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import { useTheme } from '@emotion/react';
import css from './MainDashboard.module.css';

export function MainDashboard() {
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const [showModalColumn, setShowModalColumn] = useState(false);
  const [showModalCard, setShowModalCard] = useState(false);
  const [currentColumnId, setCurrentColumnId] = useState(null);
  const [setSearchParams] = useSearchParams();

  const board = useSelector(selectCurrentBoard);
  const display = useSelector(selectDisplays);
  const isLoadingColumns = useSelector(state => state.columns.isLoading);
  const isLoadingCards = useSelector(state => state.cards.isLoading);
  const newBoardCreate = useSelector(state => state.modal.newBoardCreate);
  const theme = useTheme();

  useEffect(() => {
    if (isLoadingCards || isLoadingColumns) {
      dispatch(getBoardByID(boardId));
    }
    if (newBoardCreate) {
      dispatch(setNewBoardCreate(false));
      // const idNewBoard = board[0]._id;
      // setSearchParams({ boardId: idNewBoard });
      console.log('idNewBoard');
    }
  }, [
    newBoardCreate,
    isLoadingColumns,
    isLoadingCards,
    display,
    boardId,
    board,
    dispatch,
    setSearchParams,
  ]);

  const handleDeleteCard = id => {
    dispatch(deleteCard(id));
  };

  const createCard = columnId => {
    dispatch(setModalStatus(false));
    dispatch(setColumnId(columnId));
    setShowModalCard(true);
  };

  const editCard = () => {
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

  const onDragEnd = result => {};

  const onBeforeCapture = beforeCapture => {
    const { draggableId } = beforeCapture;
    const isCard = draggableId.startsWith('card'); // Adjust this based on your card IDs

    if (!isCard) {
      return null;
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} onBeforeCapture={onBeforeCapture}>
      <section className={css.board__main}>
        <Droppable droppableId="board" direction="horizontal" type="COLUMN">
          {provided => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={css.column__item}
            >
              {board?.columns.map((column, index) => (
                <Draggable
                  key={column._id}
                  draggableId={column._id}
                  index={index}
                >
                  {provided => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={css.column__list}
                    >
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
                            {column.cards.map((card, cardIndex) => (
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
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
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
        {showModalCard && (
          <BasicModal onClose={toggleModalCard}>
            <AddEditCard onClose={toggleModalCard} />
          </BasicModal>
        )}
      </section>
    </DragDropContext>
  );
}
