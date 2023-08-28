import css from './AddEditCard.module.css';
import iconDefs from '../../../icons/sprite.svg';
import ColorPicker from 'components/UIelements/ColorPicker/ColorPicker';
import { AddIconButton, Buttons, Calendar } from 'components';
import { useState } from 'react';

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

  return (
    <>
      <button className={css.closeBtn} onClick={onClose}>
        <svg width="18" height="18">
          <use xlinkHref={`${iconDefs}#icon-close`} />
        </svg>
      </button>
      <h3 className={css.titleCard}>{!isEditing ? 'Add card' : 'Edit card'}</h3>
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
        <label className={css.label}>
          <textarea
            className={css.textarea}
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleTextareaChange}
          />
        </label>
        <ColorPicker onSelectedColorChange={handleSelectedColorChange} />
        <div>
          <span className={css.calendarTitle}>Deadline</span>
          <Calendar />
        </div>
        <AddIconButton className={css.btn} theme={'light'}>
          <span className={css.btnSumbitAction}>
            {!isEditing ? 'Add' : 'Edit'}
          </span>
        </AddIconButton>
      </form>
    </>
  );
}
