import css from './Background.module.css';

export const Background = ({ children, img }) => {
  return (
    <div className={css.back} style={null}>
      {children}
    </div>
  );
};
