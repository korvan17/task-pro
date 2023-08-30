import { Filter } from 'components';
import css from './HeaderDashboard.module.css';

const HeaderDashboard = ({ title }) => {
  return (
    <div className={css.main__header}>
      {/* Відображаємо заголовок дошки */}
      <h1 className={css.title__main}>{title}Name Board</h1>
      <div>
        {/* Відображаємо компонент Filter */}
        <Filter />
      </div>
    </div>
  );
};

export default HeaderDashboard;
