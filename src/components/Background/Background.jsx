import { selectCurrentBoard } from 'redux/boards/selectors';
import css from './Background.module.css';
import { useSelector } from 'react-redux';

export const Background = ({ children }) => {
  const board = useSelector(selectCurrentBoard);
  const img = board?.backgroundURL;

  const bgStyle = img ? { backgroundImage: `url(${img})` } : null;

  return (
    <div className={css.bg_section} style={bgStyle}>
      {children}
    </div>
  );
};
