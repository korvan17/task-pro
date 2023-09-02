import { Filter } from 'components';
import css from './HeaderDashboard.module.css';
import { useTheme } from '@emotion/react';

const HeaderDashboard = ({ title }) => {
  const theme = useTheme();
  return (
    <div className={css.main__header}>
      {/* Відображаємо заголовок дошки */}
      <h1
        style={{ color: theme.mainDashBoard.titleTextColor }}
        className={css.title__main}
      >
        {title}
      </h1>
      <div>
        <Filter />
      </div>
    </div>
  );
};

export default HeaderDashboard;
