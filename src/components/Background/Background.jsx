import css from './Background.module.css';

export const Background = ({ children, img }) => {
  const bgStyle = img ? { backgroundImage: `url(${img})` } : null;

  return (
    <div className={css.bg_section} style={bgStyle}>
      {children}
    </div>
  );
};
