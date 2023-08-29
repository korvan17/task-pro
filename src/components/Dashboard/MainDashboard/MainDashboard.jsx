import React, { useState } from 'react';
import { AddEditColumn, Buttons, Card } from 'components';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import css from './MainDashboard.module.css';
import { v4 as uuidv4 } from 'uuid';

export function MainDashboard({ id }) {
  // Стан для відображення модального вікна
  const [showModal, setShowModal] = useState(false);

  // Стан для дошки, що містить колонки та їх карти
  const [board, setBoard] = useState([]);

  // Функція для зміни стану модального вікна
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Функція для додавання нової колонки
  const handleAddColumn = () => {
    const newColumn = {
      _id: generateUniqueId(),
      cards: [],
    };
    setBoard([...board, newColumn]);
    toggleModal();
  };

  // Функція для додавання нової карти в колонку
  const handleAddCard = columnId => {
    const newCard = {
      _id: generateUniqueId(),
      // Додаткові дані для карти
    };

    // Оновлюємо стан дошки з новою картою
    const updatedBoard = board.map(column =>
      column._id === columnId
        ? { ...column, cards: [...column.cards, newCard] }
        : column
    );

    setBoard(updatedBoard);
  };

  // Генеруємо унікальний ідентифікатор
  const generateUniqueId = () => {
    return uuidv4();
  };

  return (
    <div className={css.board}>
      {/* Відображаємо колонки і карти */}
      {board.length > 0 && (
        <ul className={css.list__column}>
          {board.map(column => (
            <li key={column._id}>
              {/* Передаємо функцію handleAddCard як властивість */}
              <Card
                column={column}
                onAddCard={() => handleAddCard(column._id)}
              />
            </li>
          ))}
        </ul>
      )}

      <div className={css.button__column}>
        {/* Відображаємо кнопку для додавання нової колонки */}
        <Buttons
          isContrast={false}
          type={'button'}
          text={'Add another column'}
          action={handleAddColumn}
        />
      </div>

      {/* Відображаємо модальне вікно для додавання колонки */}
      {showModal && (
        <BasicModal onClose={toggleModal}>
          {/* Передаємо функцію handleAddCard як властивість */}
          <AddEditColumn isEditing={false} boardId={id} onClose={toggleModal} />
        </BasicModal>
      )}
    </div>
  );
}
