import React, { useState, useEffect, useRef } from 'react';
import css from './HomePage.module.css';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import { AddEditBoard, SideBar } from 'components';
import Backdrop from 'components/Backdrop/Backdrop';
import Header from 'components/AppShell/Header/Header';
import ScreenSizeInfo from 'components/Controllers/ScreenSiziInfo';
import { useDispatch } from 'react-redux';
import { setModalStatus } from 'redux/modalSlice';
import { useTheme } from '@emotion/react';
import { useNavigate, useParams } from 'react-router-dom';
import { HomePageView, ScreenPage } from '../../components';
import { fetchBoards } from '../../redux/boards/operations';
import { useSelector } from 'react-redux';
import { selectBoards } from 'redux/boards/selectors';
import { setCurrentBoardIdToNull } from '../../redux/boards/slice';

const HomePage = () => {
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const theme = useTheme();
  const { boardId } = useParams();
  const isBoardId = boardId ? true : false;
  const navigate = useNavigate();
  const isFirstRender = useRef(true);

  const boards = useSelector(selectBoards);

  const newBoardId = useSelector(state => state.boards.currentBoardId);

  useEffect(() => {
    if (isFirstRender.current) {
      dispatch(fetchBoards());
      isFirstRender.current = false;
    }
  }, [dispatch]);

  useEffect(() => {
    if (newBoardId) {
      navigate(`/home/${newBoardId}`);
      dispatch(setCurrentBoardIdToNull());
    }
  }, [navigate, dispatch, newBoardId]);

  useEffect(() => {
    function handleResize() {
      setIsMenuOpen(prevIsMenuOpen => {
        if (showModal) {
          return false;
        } else {
          return window.innerWidth >= 1440 ? true : prevIsMenuOpen;
        }
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showModal, boards, dispatch]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const createBoard = () => {
    dispatch(setModalStatus(false));
    toggleModal();
  };

  const editBoard = id => {
    toggleModal();
    dispatch(setModalStatus(true));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <ScreenSizeInfo />
      <Header toggleMenu={toggleMenu} addModal={createBoard}></Header>
      <div className={css.sideBarSectionContainer}>
        <SideBar
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
          editBoard={editBoard}
          createBoard={createBoard}
          toggleMenu={toggleMenu}
          toggleModal={toggleModal}
        ></SideBar>

        {isMenuOpen && window.innerWidth < 1440 && <Backdrop />}
        <section
          style={{ background: theme.screensPage.background }}
          className={css.section}
        >
          {isBoardId ? (
            <ScreenPage id={boardId} />
          ) : (
            <HomePageView theme={theme} createBoard={createBoard} />
          )}

          {showModal && (
            <BasicModal onClose={createBoard}>
              <AddEditBoard onClose={toggleModal} boardId={boardId} />
            </BasicModal>
          )}
        </section>
      </div>
    </>
  );
};

export default HomePage;
