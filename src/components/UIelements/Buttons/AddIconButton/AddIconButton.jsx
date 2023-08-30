import Buttons from '../Button';
import css from './AddIconButton.module.css';
import sprite from '../../../../icons/sprite.svg';
import { useTheme } from '@emotion/react';

export default function AddIconButton({
  buttonType = 'submit',
  children,
  className,
}) {
  const { palette } = useTheme();
  const theme = palette.mode;
  //temp solution
  const getTheme = () => {
    switch (theme) {
      case 'light':
        return css.light;
      case 'dark':
        return css.dark;
      default:
        return `${children ? css.violet : css.violetNoTxt}`;
    }
  };
  return (
    <Buttons
      theme={theme}
      className={`${
        theme === 'violet' && !children && css.buttonViolet
      } ${className} ${children ? css.button : css.buttonNoTxt}`}
      buttonType={buttonType}
    >
      <svg
        className={`${getTheme()} ${css.icon} ${!children && css.iconNoTxt}`}
        width={28}
        height={28}
      >
        <use xlinkHref={`${sprite}#icon-add`} />
      </svg>
      {children}
    </Buttons>
  );
}
