import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import css from './HomePage.module.css';
import { selectBoards } from 'redux/boards/selectors';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import { AddEditBoard, SideBar } from 'components';

import Backdrop from 'components/Backdrop/Backdrop';
import Header from 'components/AppShell/Header/Header';
import { getBoardByID } from 'redux/boards/operations';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const [isEditing, setIsEditing] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
    // setIsEditing(editing);
  };

  useEffect(() => {
    function handleResize() {
      setIsMenuOpen(window.innerWidth >= 1440);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Використовуємо useSelector для отримання списку дошок зі стану Redux
  const boards = useSelector(selectBoards);
  // const [title, setTitle] = useSelector();
  // const [icon, setIcon] = useSelector();
  // const [background, setBackground] = useSelector();

  // Використовуємо useNavigate для навігації між сторінками
  const navigate = useNavigate();

  // Стан для визначення, чи відбулося початкове перенаправлення
  const [completedInitialRedirect, setCompletedInitialRedirect] =
    useState(false);

  // Стан для відображення модального вікна

  // Функція для зміни стану модального вікна

  // Використовуємо useDispatch для виклику Redux-дій
  const dispatch = useDispatch();

  // Викликаємо дію getBoard() за допомогою dispatch під час монтажу компонента
  useEffect(() => {
    dispatch(getBoardByID());
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

  // зробити логіку і прокинути стейти!
  return (
    <>
      <Header toggleMenu={toggleMenu}></Header>
      <SideBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}></SideBar>
      {isMenuOpen && window.innerWidth < 1440 && <Backdrop />}
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
