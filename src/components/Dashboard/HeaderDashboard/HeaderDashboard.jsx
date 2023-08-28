import { Filter } from 'components';
import css from './HeaderDashboard.module.css';

const HeaderDashboard = ({ title }) => {
  return (
    <div>
      <h1 className={css.title}>{title}</h1>
      <div>
        <Filter />
      </div>
    </div>
  );
};
export default HeaderDashboard;
