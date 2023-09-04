import Buttons from '../Button';
import css from './AddIconButton.module.css';
import sprite from '../../../../icons/sprite.svg';
import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { setNewBoardCreate } from 'redux/modalSlice';
export default function AddIconButton({
  columnId,
  buttonType = 'button',
  children,
  className,
  pushButton,
}) {
  const theme = useTheme();
  const isEditing = useSelector(state => state.modal.isModalDisplayed);
  const dispatch = useDispatch();
  return (
    <Buttons
      columnId={columnId}
      pushButton={pushButton}
      className={` ${className} ${children ? css.button : css.buttonNoTxt}`}
      buttonType={buttonType}
      navigateToNewBoard={() => {
        if (!isEditing) dispatch(setNewBoardCreate(true));
      }}
    >
      <svg
        style={{
          backgroundColor: theme.popUp.buttonIconBackground,
          stroke: theme.popUp.buttonIconPlusFill,
        }}
        className={`${css.icon} ${!children && css.iconNoTxt}`}
        width={28}
        height={28}
      >
        <use xlinkHref={`${sprite}#icon-add`} />
      </svg>
      {children}
    </Buttons>
  );
}
