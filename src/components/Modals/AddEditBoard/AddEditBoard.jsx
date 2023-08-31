import css from './AddEditBoard.module.css';
import iconDefs from '../../../icons/sprite.svg';
import { AddIconButton } from 'components';
import IconPicker from 'components/UIelements/IconPicker/IconPicker';
import { useState } from 'react';
import BackgroundPicker from 'components/UIelements/BackgroundPicker/BackgroundPicker';
import { useDispatch } from 'react-redux';
import { addBoard, updateBoardById } from 'redux/boards/operations';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';

export default function AddEditBoard({ title, isEditing, onClose, boardId }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [icon, setIcon] = useState(null);
  const [background, setBackground] = useState(null);
  const theme = useTheme();

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };
  const navigate = useNavigate();
  const handleSelectedIconChange = selectedIcon => {
    setIcon(selectedIcon);
  };

  const handleSelectedBackgroundChange = selectedBackground => {
    setBackground(selectedBackground);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (!isEditing) {
        await dispatch(addBoard({ title: inputValue, background, icon }));
      } else {
        await dispatch(
          updateBoardById({
            title: inputValue,
            background,
            icon,
            boardId: boardId,
          })
        );
      }
      // await dispatch(
      //   updateBoardById({
      //     title: inputValue,
      //     background,
      //     icon,
      //     boardId: boardId,
      //   })
      // );
      onClose();
      // navigate(`/${boardId}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button className={css.closeBtn} onClick={onClose}>
        <svg
          style={{ stroke: theme.popUp.closeIconColor }}
          width="18"
          height="18"
        >
          <use xlinkHref={`${iconDefs}#icon-close`} />
        </svg>
      </button>
      <h3
        style={{ color: theme.popUp.titleColor }}
        className={css.titleBoard}
      >
        {!isEditing ? 'New board' : 'Edit board'}
      </h3>
      <form onSubmit={handleSubmit}>
        <label className={css.label}>
          <input
            style={{
              color: theme.popUp.inputTextColor,
              borderColor: theme.popUp.inputBorderColor,
              '::placeholder': { color: theme.popUp.inputPlaceholderColor },
            }}
            className={css.input}
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleInputChange}
          />
        </label>
        <IconPicker onSelectedIconChange={handleSelectedIconChange} />
        <BackgroundPicker
          onSelectedBackgroundChange={handleSelectedBackgroundChange}
        />
        <AddIconButton className={css.btn} theme={'light'}>
          <span
            style={{ color: theme.popUp.buttonTextColor }}
            className={css.btnSumbitAction}
          >
            {!isEditing ? 'Create' : 'Edit'}
          </span>
        </AddIconButton>
      </form>
    </>
  );
}
