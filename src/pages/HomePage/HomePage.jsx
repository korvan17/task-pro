import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import css from './HomePage.module.css';
import { selectBoards } from 'redux/boards/selectors';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import { AddEditBoard } from 'components';
import { getBoard } from 'redux/boards/operations';

const HomePage = () => {
  // Використовуємо useSelector для отримання списку дошок зі стану Redux
  const boards = useSelector(selectBoards);

  // Використовуємо useNavigate для навігації між сторінками
  const navigate = useNavigate();

  // Стан для визначення, чи відбулося початкове перенаправлення
  const [completedInitialRedirect, setCompletedInitialRedirect] =
    useState(false);

  // Стан для відображення модального вікна
  const [showModal, setShowModal] = useState(false);

  // Функція для зміни стану модального вікна
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Використовуємо useDispatch для виклику Redux-дій
  const dispatch = useDispatch();

  // Викликаємо дію getBoard() за допомогою dispatch під час монтажу компонента
  useEffect(() => {
    dispatch(getBoard());
  }, [dispatch]);

  // Використовуємо useEffect для перенаправлення на першу дошку після завантаження
  useEffect(() => {
    // Перевіряємо, чи ще не відбулося перенаправлення і чи є хоча б одна дошка
    if (!completedInitialRedirect && boards.length > 0) {
      // Використовуємо navigate для перенаправлення на сторінку з айді першої дошки
      navigate(`/home/${boards[0]._id}`);
      // Позначаємо, що перенаправлення відбулося
      setCompletedInitialRedirect(true);
    }
  }, [boards, completedInitialRedirect, navigate]);

  return (
    <>
      {/* <Header />
      <Sidebar /> */}
      <section className={css.section}>
        <div className={css.text__home}>
          <p>
            Before starting your project, it is essential{' '}
            {/* Викликаємо toggleModal при натисканні кнопки */}
            <button onClick={toggleModal} className={css.button__home}>
              to create a board
            </button>{' '}
            to visualize and track all the necessary tasks and milestones. This
            board serves as a powerful tool to organize the workflow and ensure
            effective collaboration among team members.
          </p>
        </div>
        {/* Відображаємо модальне вікно, якщо showModal === true */}
        {showModal && (
          <BasicModal onClose={toggleModal}>
            {/* Передаємо toggleModal в AddEditBoard, щоб закрити модальне вікно */}
            <AddEditBoard onClose={toggleModal} />
          </BasicModal>
        )}
      </section>
    </>
  );
};

export default HomePage;
