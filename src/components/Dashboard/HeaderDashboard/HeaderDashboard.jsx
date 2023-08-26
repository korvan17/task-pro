import css from './HeaderDashboard.module.css';

const HeaderDashboard = ({ title }) => {
  return (
    <div className={css.boardHeader}>
      <h1 className={css.title}>{title}</h1>
      <div className={`${css.title}`}>{/* <Filter /> */}</div>
    </div>
  );
};
export default HeaderDashboard;
