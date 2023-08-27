import css from './HeaderDashboard.module.css';

const HeaderDashboard = ({ title }) => {
  return (
    <div>
      <h1 className={css.title}>{title}</h1>
      {/* <Filter /> */}
    </div>
  );
};
export default HeaderDashboard;
