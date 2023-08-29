import css from './AddEditBoard.module.css';
import iconDefs from '../../../icons/sprite.svg';
import { AddIconButton } from 'components';
import IconPicker from 'components/UIelements/IconPicker/IconPicker';
import { useState } from 'react';
import BackgroundPicker from 'components/UIelements/BackgroundPicker/BackgroundPicker';
import { useNavigate } from 'react-router-dom';

export default function AddEditBoard({
  title,
  isEditing,
  onSubmit,
  onClose,
  boardId,
}) {
  const navigate = useNavigate();

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

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue, background, icon);
    onClose();
    navigate(`/${boardId}`);
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
