import React, { useState, useEffect } from 'react';
import css from './HomePage.module.css';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import { AddEditBoard, SideBar } from 'components';
import Backdrop from 'components/Backdrop/Backdrop';
import Header from 'components/AppShell/Header/Header';
import ScreenSizeInfo from 'components/Controllers/ScreenSiziInfo';
import { useTheme } from '@emotion/react';
import { ScreenPage } from 'pages';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalStatus, setModalStatus } from 'redux/modalSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { boardId } = useParams();

  const isBoardId = boardId ? true : false;

  const theme = useTheme();

  const modalStatus = useSelector(selectModalStatus);

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

  const addModal = () => {
    setShowModal(!showModal);
    if (window.innerWidth < 1440) {
      toggleMenu();
    }
  };

  const editleModal = () => {
    setShowModal(!showModal);
    dispatch(setModalStatus(!modalStatus));
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
        addModal={addModal}
        editleModal={editleModal}
        // pushBoard={pushBoard}
      ></SideBar>

      {isMenuOpen && window.innerWidth < 1440 && <Backdrop />}
      <section
        style={{ background: theme.screensPage.background }}
        className={css.section}
      >
        {isBoardId ? (
          <ScreenPage id={boardId} />
        ) : (
          <div className={css.text__home}>
            <p style={{ color: theme.screensPage.screenPageText }}>
              Before starting your project, it is essential{' '}
              <button
                style={{ color: theme.screensPage.screenPageSpan }}
                onClick={addModal}
                className={css.button__home}
              >
                to create a board
              </button>{' '}
              to visualize and track all the necessary tasks and milestones.
              This board serves as a powerful tool to organize the workflow and
              ensure effective collaboration among team members.
            </p>
          </div>
        )}

        {showModal && (
          <BasicModal onClose={addModal}>
            <AddEditBoard onClose={addModal} />
          </BasicModal>
        )}
      </section>
    </>
  );
};

export default HomePage;
