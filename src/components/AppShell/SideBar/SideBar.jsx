import sprite from '../../../icons/sprite.svg';
import iconCactus from '../../../icons/cactus.png';
import css from './SideBar.module.css';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBoards } from 'redux/boards/selectors';
import { logout } from '../../../redux/auth/authOperations';
import { Board, NeedHelp } from 'components';
import { useNavigate } from 'react-router-dom';
import BasicModal from 'components/Modals/BasicModal/BasicModal';

function SideBar({
  setIsMenuOpen,
  isMenuOpen,
  toggleModal,
  pushBoard,
  createBoard,
  editBoard,
  toggleMenu,
}) {
  const [showNeedHelpModal, setShowNeedHelpModal] = useState(false);

  const navigate = useNavigate();
  const theme = useTheme();
  const menuRef = useRef(null);
  const boards = useSelector(selectBoards);

  const dispatch = useDispatch();

  useEffect(() => {}, [boards]);

  const handleClickOutside = event => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      window.innerWidth < 1440
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const logoutBtn = async () => {
    await dispatch(logout());
    navigate('/');
  };

  const toggleNeedHelpModal = () => {
    setShowNeedHelpModal(!showNeedHelpModal);
  };

  const clickNeedHelp = () => {
    toggleNeedHelpModal();
  };

  const openNeedHelp = () => {
    toggleNeedHelpModal();
    toggleMenu();
  };

  const closeNeedHelp = () => {
    toggleNeedHelpModal();
  };

  // const handleBoardClick = boardId => {
  //   setSelectedBoard(boardId);

  //   console.log('handleBoardClick');
  //   console.log(boardId);
  // };

  return (
    <div
      style={{ backgroundColor: theme.sidebar.background }}
      className={isMenuOpen ? css.openSideBar : css.sideBar}
      ref={menuRef}
    >
      <div className={css.HeaderNewBoardContainer}>
        <div className={css.header}>
          <svg
            style={{
              '--color1': theme.sidebar.logoFill,
              '--color2': theme.sidebar.logoFlashColor,
            }}
            width="32"
            height="32"
          >
            <use xlinkHref={`${sprite}#icon-logo`} />
          </svg>
          <h2
            style={{ color: theme.sidebar.logoTextColor }}
            className={css.headerTitle}
          >
            Task Pro
          </h2>
        </div>
        <div className={css.boards}>
          <h3
            style={{ color: theme.sidebar.myBoardsColor }}
            className={css.boardsTitle}
          >
            My boards
          </h3>
          <div
            style={{
              borderColor: theme.sidebar.separatorLineColor,
            }}
            className={css.createBoard}
          >
            <span
              style={{
                color: theme.sidebar.createBoardColor,
              }}
              className={css.createBoardText}
            >
              Create a new board
            </span>
            <button
              style={{
                backgroundColor: theme.sidebar.createButtonBackground,
              }}
              onClick={createBoard}
              className={css.createBoardButton}
            >
              <svg width="20" height="20">
                <use
                  style={{
                    stroke: theme.sidebar.createButtonPlusFill,
                  }}
                  className={css.addIcon}
                  xlinkHref={`${sprite}#icon-add`}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <ul className={css.boardsList}>
        {boards.map(board => (
          <Board
            key={board._id}
            board={board}
            editBoard={editBoard}
            toggleModal={toggleModal}
          ></Board>
        ))}
      </ul>
      <div className={css.containerHelpLogout}>
        <div
          style={{
            background: theme.sidebar.needHelpBackground,
          }}
          className={css.help}
        >
          <img src={`${iconCactus}`} alt="cactus" width={54} />
          <p
            style={{
              color: theme.sidebar.needHelpTextColor,
            }}
            className={css.helpText}
          >
            If you need help with{' '}
            <span
              style={{
                color: theme.sidebar.needHelpSpanColor,
              }}
              className={css.taskProSpan}
            >
              TaskPro
            </span>
            , check out our support resources or reach out to our customer
            support team.
          </p>
          <button onClick={openNeedHelp} className={css.helpBtn}>
            <svg
              style={{
                stroke: theme.sidebar.needHelpIconAndTextColor,
              }}
              className={css.helpIcon}
              width="20"
              height="20"
            >
              <use xlinkHref={`${sprite}#icon-help`} />
            </svg>
            <p
              style={{
                color: theme.sidebar.needHelpIconAndTextColor,
              }}
              className={css.helpBtnText}
            >
              Need help?
            </p>
          </button>
        </div>
        <button onClick={logoutBtn} className={css.logoutBtn}>
          <svg
            style={{
              stroke: theme.sidebar.logoutIconFill,
            }}
            className={css.iconLogout}
            width="32"
            height="32"
          >
            <use xlinkHref={`${sprite}#icon-logout`} />
          </svg>
          <p
            style={{
              color: theme.sidebar.logoutTextColor,
            }}
            className={css.helpBtnText}
          >
            Log out
          </p>
        </button>
      </div>
      {showNeedHelpModal && (
        <BasicModal onClose={closeNeedHelp}>
          <NeedHelp onClose={clickNeedHelp} />
        </BasicModal>
      )}
    </div>
  );
}

export default SideBar;
