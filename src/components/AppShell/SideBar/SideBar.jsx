import sprite from '../../../icons/sprite.svg';
import iconCactus from '../../../icons/cactus.png';
import css from './SideBar.module.css';
import { useEffect, useRef } from 'react';
import { useTheme } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBoards } from 'redux/boards/selectors';
import { logout } from '../../../redux/auth/authOperations';
import { Board } from 'components';
import { useNavigate } from 'react-router-dom';
import { fetchBoards } from 'redux/boards/operations';

function SideBar({
  setIsMenuOpen,
  isMenuOpen,

  toggleModal,
  pushBoard,
  createBoard,
  editBoard,
}) {
  const navigate = useNavigate();
  const theme = useTheme();
  const menuRef = useRef(null);
  const boards = useSelector(selectBoards);
  // console.log('boards:', boards);
  const dispatch = useDispatch();
  // const isBoard = boards.length !== 0 ? true : false;

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

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
    console.log('logoutBtn');
    await dispatch(logout());
    navigate('/');
  };

  return (
    <div
      style={{ backgroundColor: theme.sidebar.background }}
      className={isMenuOpen ? css.openSideBar : css.sideBar}
      ref={menuRef}
    >
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

      <ul className={css.boardsList}>
        {boards.map(board => (
          <Board
            key={board._id}
            board={board}
            // background={board.background}
            // icon={board.icon}
            // title={board.title}
            editBoard={editBoard}
            toggleModal={toggleModal}
            style={{
              color: theme.sidebar.selectedBoardTitleColor,
            }}
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
          <button onClick={createBoard} className={css.helpBtn}>
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
    </div>
  );
}

export default SideBar;
