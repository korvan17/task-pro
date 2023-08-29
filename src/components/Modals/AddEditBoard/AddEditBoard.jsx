import css from './AddEditBoard.module.css';
import iconDefs from '../../../icons/sprite.svg';
import { AddIconButton } from 'components';
import IconPicker from 'components/UIelements/IconPicker/IconPicker';
import { useState } from 'react';
import BackgroundPicker from 'components/UIelements/BackgroundPicker/BackgroundPicker';
import { useDispatch } from 'react-redux';
import { addBoard, updateBoardById } from 'redux/boards/operations';

export default function AddEditBoard({
  title,
  isEditing,
  onSubmit,
  onClose,
  boardId,
}) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [icon, setIcon] = useState(null);
  const [background, setBackground] = useState(null);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

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
      }
      await dispatch(
        updateBoardById({ title: inputValue, background, icon, id: boardId })
      );
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button className={css.closeBtn} onClick={onClose}>
        <svg width="18" height="18">
          <use xlinkHref={`${iconDefs}#icon-close`} />
        </svg>
      </button>
      <h3 className={css.titleBoard}>
        {!isEditing ? 'New board' : 'Edit board'}
      </h3>
      <form onSubmit={handleSubmit}>
        <label className={css.label}>
          <input
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
          <span className={css.btnSumbitAction}>
            {!isEditing ? 'Create' : 'Edit'}
          </span>
        </AddIconButton>
      </form>
    </>
  );
}
