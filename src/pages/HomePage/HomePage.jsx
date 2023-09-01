import React, { useState, useEffect } from 'react';
import css from './HomePage.module.css';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import { AddEditBoard, SideBar } from 'components';
import Backdrop from 'components/Backdrop/Backdrop';
import Header from 'components/AppShell/Header/Header';
import ScreenSizeInfo from 'components/Controllers/ScreenSiziInfo';
import { useDispatch } from 'react-redux';
import { setModalStatus } from 'redux/modalSlice';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [boardId, setBoardId] = useState(null);

  const dispatch = useDispatch();

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

  const toggleModal = () => {
    setShowModal(!showModal);
    if (window.innerWidth < 1440) {
      toggleMenu();
    }
  };

  const editBoard = id => {
    toggleModal();
    dispatch(setModalStatus(true));
    setBoardId(id);
  };

  const createBoard = () => {
    toggleModal();
    dispatch(setModalStatus(false));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <ScreenSizeInfo />
      <Header toggleMenu={toggleMenu}></Header>
      <SideBar
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        editBoard={editBoard}
        createBoard={createBoard}
        // pushBoard={pushBoard}
      ></SideBar>

      {isMenuOpen && window.innerWidth < 1440 && <Backdrop />}
      <section className={css.section}>
        <div className={css.text__home}>
          <p>
            Before starting your project, it is essential{' '}
            <button onClick={toggleModal} className={css.button__home}>
              to create a board
            </button>
            to visualize and track all the necessary tasks and milestones. This
            board serves as a powerful tool to organize the workflow and ensure
            effective collaboration among team members.
          </p>
        </div>

        {showModal && (
          <BasicModal onClose={toggleModal}>
            <AddEditBoard onClose={toggleModal} boardId={boardId} />
          </BasicModal>
        )}
      </section>
    </>
  );
};

export default HomePage;
