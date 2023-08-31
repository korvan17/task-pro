import css from './AddEditCard.module.css';
import iconDefs from '../../../icons/sprite.svg';
import ColorPicker from 'components/UIelements/ColorPicker/ColorPicker';
import { AddIconButton, Calendar } from 'components';
import { useState } from 'react';
import { useTheme } from '@emotion/react';

export default function AddEditCard({
  title,
  description,
  isEditing,
  onSubmit,
  onClose,
}) {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [color, setColor] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleTextareaChange = e => {
    setTextareaValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue, textareaValue, color);
    onClose();
  };

  const handleSelectedColorChange = selectedColor => {
    setColor(selectedColor);
  };
  const theme = useTheme();

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
      <h3 style={{ color: theme.popUp.titleColor }} className={css.titleCard}>
        {!isEditing ? 'Add card' : 'Edit card'}
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
        <label className={css.label}>
          <textarea
            style={{
              color: theme.popUp.inputTextColor,
              borderColor: theme.popUp.inputBorderColor,
              '::placeholder': { color: theme.popUp.inputPlaceholderColor },
            }}
            className={css.textarea}
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleTextareaChange}
          />
        </label>
        <ColorPicker onSelectedColorChange={handleSelectedColorChange} />
        <div>
          <span
            style={{ color: theme.popUp.iconsTextColor }}
            className={css.calendarTitle}
          >
            Deadline
          </span>
          <Calendar />
        </div>
        <AddIconButton className={css.btn}>
          <span
            style={{ color: theme.popUp.buttonTextColor }}
            className={css.btnSumbitAction}
          >
            {!isEditing ? 'Add' : 'Edit'}
          </span>
        </AddIconButton>
      </form>
    </>
  );
}
