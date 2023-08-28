import sprite from '../../../icons/sprite.svg';
import iconCactus from '../../../icons/cactus.png';
import css from './SideBar.module.css';

function SideBar() {
  return (
    <div className={css.sideBar}>
      <div className={css.header}>
        <svg width="32" height="32">
          <use xlinkHref={`${sprite}#icon-logo`} />
        </svg>
        <h2 className={css.headerTitle}>Task Pro</h2>
      </div>
      <div className={css.boards}>
        <h3 className={css.boardsTitle}>My boards</h3>
        <div className={css.createBoard}>
          <span className={css.createBoardText}>Create a new board</span>
          <button className={css.createBoardButton}>
            <svg width="20" height="20">
              <use className={css.addIcon} xlinkHref={`${sprite}#icon-add`} />
            </svg>
          </button>
        </div>
      </div>

      <ul className={css.boardsList}>
        <li className={css.boardsItem}>Board 1</li>
        <li className={css.boardsItem}>Board 2</li>
      </ul>
      <div className={css.containerHelpLogout}>
        <div className={css.help}>
          <img src={`${iconCactus}`} alt="cactus" width={54} />
          <p className={css.helpText}>
            If you need help with{' '}
            <span className={css.taskProSpan}>TaskPro</span>, check out our
            support resources or reach out to our customer support team.
          </p>
          <button className={css.helpBtn}>
            <svg className={css.helpIcon} width="20" height="20">
              <use xlinkHref={`${sprite}#icon-help`} />
            </svg>
            <p className={css.helpBtnText}>Need help?</p>
          </button>
        </div>
        <button className={css.logoutBtn}>
          <svg className={css.iconLogout} width="32" height="32">
            <use xlinkHref={`${sprite}#icon-logout`} />
          </svg>
          <p className={css.helpBtnText}>Log out</p>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
