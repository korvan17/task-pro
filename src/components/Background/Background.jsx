import css from './Background.module.css';

export const Background = ({ children, img }) => {
  return <div className={css.back}>{children}</div>;
};
