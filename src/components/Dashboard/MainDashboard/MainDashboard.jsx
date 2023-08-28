import React, { useState } from 'react';
import { AddEditColumn, Buttons, Card } from 'components';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import css from './MainDashboard.module.css';
import { v4 as uuidv4 } from 'uuid';

export function MainDashboard({ id }) {
  const [showModal, setShowModal] = useState(false);
  const [board, setBoard] = useState([]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleAddColumn = () => {
    const newColumn = {
      _id: generateUniqueId(),
      cards: [],
    };
    setBoard([...board, newColumn]);
    toggleModal();
  };

  const handleAddCard = columnId => {
    const newCard = {
      _id: generateUniqueId(),
      // Інші дані для карти
    };

    const updatedBoard = board.map(column =>
      column._id === columnId
        ? { ...column, cards: [...column.cards, newCard] }
        : column
    );

    setBoard(updatedBoard);
  };

  const generateUniqueId = () => {
    return uuidv4();
  };

  return (
    <div className={css.board}>
      {board.length > 0 && (
        <ul className={css.list__column}>
          {board.map(column => (
            <li key={column._id}>
              <Card
                column={column}
                onAddCard={() => handleAddCard(column._id)}
              />
            </li>
          ))}
        </ul>
      )}

      <div className={css.button__column}>
        <Buttons
          isContrast={false}
          type={'button'}
          text={'Add another column'}
          action={handleAddColumn}
        />
      </div>

      {showModal && (
        <BasicModal onClose={toggleModal}>
          <AddEditColumn
            isEditing={false}
            boardId={id}
            onAddCard={handleAddCard}
          />
        </BasicModal>
      )}
    </div>
  );
}
