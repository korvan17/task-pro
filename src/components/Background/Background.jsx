import { selectCurrentBoard } from 'redux/boards/selectors';
import css from './Background.module.css';
import { useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';

export const Background = ({ children }) => {
  const theme = useTheme();
  const board = useSelector(selectCurrentBoard);
  const img = board?.backgroundURL;

  const bgStyle = img
    ? { backgroundImage: `url(${img})` }
    : { background: theme.screensPage.background };

  return (
    <div className={css.bg_section} style={bgStyle}>
      {children}
    </div>
  );
};
