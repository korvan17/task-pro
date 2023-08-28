import React, { useState } from 'react';
import { AddEditColumn, Buttons, Card } from 'components';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import css from './MainDashboard.module.css';
import { v4 as uuidv4 } from 'uuid';
export function MainDashboard({ id }) {
  const [showModal, setShowModal] = useState(false);
  const [board, setBoard] = useState([]); // Используйте стейт для хранения данных о колонках

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleAddСolumn = () => {
    const newColumn = {
      _id: generateUniqueId(),
    };
    setBoard([...board, newColumn]); // Добавление новой колонки в массив
    toggleModal();
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
              <Card column={column} />
            </li>
          ))}
        </ul>
      )}

      <div className={css.button__column}>
        <Buttons
          isContrast={false}
          type={'button'}
          text={'Add another column'}
          action={handleAddСolumn}
        />
      </div>

      {showModal && (
        <BasicModal onClose={toggleModal}>
          <AddEditColumn isEditing={false} boardId={id} />
        </BasicModal>
      )}
    </div>
  );
}
