import React, { useState, useEffect } from 'react';
import css from './HomePage.module.css';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import { AddEditBoard, SideBar } from 'components';
import Backdrop from 'components/Backdrop/Backdrop';
import Header from 'components/AppShell/Header/Header';
import ScreenSizeInfo from 'components/Controllers/ScreenSiziInfo';
import { useTheme } from '@emotion/react';
// import { selectBoards } from 'redux/boards/selectors';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { getBoardByID } from 'redux/boards/operations';

const HomePage = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const boards = useSelector(selectBoards);
  // const [hasRedirected, setHasRedirected] = useState(false);
  const theme = useTheme();

  // useEffect(() => {
  //   dispatch(getBoardByID());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (!hasRedirected && boards.length > 0) {
  //     navigate(`/home/${boards[0]._id}`);
  //     setHasRedirected(true);
  //   }
  // }, [boards, hasRedirected, navigate]);

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
        toggleModal={toggleModal}
        // pushBoard={pushBoard}
      ></SideBar>

      {isMenuOpen && window.innerWidth < 1440 && <Backdrop />}
      <section
        style={{ background: theme.screensPage.background }}
        className={css.section}
      >
        <div className={css.text__home}>
          <p style={{ color: theme.screensPage.screenPageText }}>
            Before starting your project, it is essential{' '}
            <button
              style={{ color: theme.screensPage.screenPageSpan }}
              onClick={toggleModal}
              className={css.button__home}
            >
              to create a board
            </button>{' '}
            to visualize and track all the necessary tasks and milestones. This
            board serves as a powerful tool to organize the workflow and ensure
            effective collaboration among team members.
          </p>
        </div>

        {showModal && (
          <BasicModal onClose={toggleModal}>
            <AddEditBoard onClose={toggleModal} />
          </BasicModal>
        )}
      </section>
    </>
  );
};

export default HomePage;
