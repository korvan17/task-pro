import React, { useState } from 'react';
import { AddIconButton, Card, Column } from 'components';
// import BasicModal from 'components/Modals/BasicModal/BasicModal';
import css from './MainDashboard.module.css';

export function MainDashboard({ id }) {
  const [showModal, setShowModal] = useState(false);
  // const [board, setBoard] = useState([]);

  const board = {
    columns: [
      {
        _id: 'das',
        title: 'To Do',
        cards: [
          {
            id: 'edasd',
            title: 'patato',
            description: 'Potato 2kg',
            priority: 'low',
            deadline: '',
          },
          {
            id: 'edasd2',
            title: 'tomato',
            description: 'tomato 2kg',
            priority: 'without',
            deadline: '',
          },
        ],
      },
      {
        _id: 'das2',
        title: 'In progress',
        cards: [
          {
            id: 'afqwefqwf',
            title: 'apple',
            description: 'Apple 18kg',
            priority: 'without',
            deadline: '',
          },
          {
            id: 'edasd2',
            title: 'berry',
            description: 'berry 50kg',
            priority: 'without',
            deadline: '',
          },
        ],
      },
    ],
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleAddColumn = () => {
    // setBoard([...board]);
    toggleModal();
  };

  // const handleAddCard = () => {};
  // const updatedBoard = board.columns.map(column =>
  //   column._id === columnId ? { ...column, cards: [...column.cards] } : column
  // );

  // setBoard(updatedBoard);

  return (
    <div className={css.board}>
      {board?.columns.length > 0 && (
        <ul className={css.column__item}>
          {board.columns.map(column => (
            <li key={column._id} className={css.column__list}>
              <Column title={column.title} />
              {/* <div className={css.container__column}>
                <p className={css.title__column}>{column.title}</p>
                <div className={css.buttons__wrapp}>
                  <button
                    className={css.button__column}
                    type="button"
                    title="pencil"
                  >
                    <svg width="16" height="16">
                      <use
                        xlinkHref={`${sprite}#icon-edit`}
                        className={css.svgIcon}
                      />
                    </svg>
                  </button>
                  <button
                    className={css.button__column}
                    type="button"
                    title="trash"
                  >
                    <svg width="16" height="16">
                      <use
                        xlinkHref={`${sprite}#icon-trash`}
                        className={css.svgIcon}
                      />
                    </svg>
                  </button>
                </div>
              </div> */}
              <ul className={css.card__item}>
                {column.cards.map(card => (
                  <li key={card._id}>
                    <Card
                      theme="dark"
                      title={card.title}
                      desc={card.description}
                      priority={card.priority}
                      deadline={card.deadline}
                    />
                  </li>
                ))}
                <li>
                  <div className={css.button__column}>
                    <AddIconButton
                      className={css.btn__card}
                      action={handleAddColumn}
                      theme="dark"
                    >
                      <span className={css.btn__text}>Add another card</span>
                    </AddIconButton>
                  </div>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      )}
      {/* 
<div className={css.button__column}>
        <AddIconButton
          isContrast={false}
          type={'button'}
          text={'Add another column'}
          action={handleAddColumn}
        />
      </div>       */}

      {/* {showModal && (
  <BasicModal onClose={toggleModal}>
    <AddEditColumn isEditing={false} boardId={id} onClose={toggleModal} />
  </BasicModal>
)} */}
    </div>
  );
}
