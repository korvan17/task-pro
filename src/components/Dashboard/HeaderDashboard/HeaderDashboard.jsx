import { Filter } from 'components';
import css from './HeaderDashboard.module.css';

const HeaderDashboard = ({ title }) => {
  return (
    <div>
      {/* Відображаємо заголовок дошки */}
      <h1 className={css.title}>{title}</h1>
      <div>
        {/* Відображаємо компонент Filter */}
        <Filter />
      </div>
    </div>
  );
};

export default HeaderDashboard;
