import React, { useState } from 'react';
import { AddEditColumn, Card } from 'components';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import css from './MainDashboard.module.css';

export function MainDashboard({ id }) {
  const [showModal, setShowModal] = useState(false);
  // const [board, setBoard] = useState([]); // Используйте стейт для хранения данных о колонках
  const [board] = useState([]); // Используйте стейт для хранения данных о колонках

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // const handleAddСolumn = () => {
  //   // Логика добавления колонки в стейт board
  //   const newColumn = {
  //     _id: generateUniqueId(), // Генерация уникального ID
  //     // Дополнительные свойства колонки
  //   };
  //   setBoard([...board, newColumn]); // Добавление новой колонки в массив
  //   toggleModal(); // Закрытие модального окна после добавления колонки
  // };

  // const generateUniqueId = () => {
  //   // Ваш код для генерации уникального ID
  // };

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
        {/* <Buttons
          isContrast={false}
          type={'button'}
          text={'Add another column'}
          action={handleAddСolumn}
        /> */}
        <button>jdasjd</button>
      </div>

      {showModal && (
        <BasicModal onClose={toggleModal}>
          <AddEditColumn isEditing={false} boardId={id} />
        </BasicModal>
      )}
    </div>
  );
}
