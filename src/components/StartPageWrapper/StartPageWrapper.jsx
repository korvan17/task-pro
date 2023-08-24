import css from './StartPageWrapper.module.css';

const StartContainer = ({ children }) => {
  return <div className={css.wrapper}>{children}</div>;
};

export default StartContainer;
