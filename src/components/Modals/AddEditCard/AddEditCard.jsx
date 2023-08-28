import css from './AddEditCard.module.css';
import iconDefs from '../../../icons/sprite.svg';
import ColorPicker from 'components/UIelements/ColorPicker/ColorPicker';
import { Buttons, Calendar } from 'components';
import { useState } from 'react';

export default function AddEditCard({
  title,
  description,
  isEditing,
  onSubmit,
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
  };

  const handleSelectedColorChange = selectedColor => {
    setColor(selectedColor);
  };

  return (
    <>
      <button className={css.closeBtn}>
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
        <Buttons className={css.btn} theme={'light'}>
          <div className={css.btnSumbitIcon}>
            <svg width="14" height="14">
              <use xlinkHref={`${iconDefs}#icon-add`} />
            </svg>
          </div>
          <span className={css.btnSumbitAction}>
            {!isEditing ? 'Add' : 'Edit'}
          </span>
        </Buttons>
      </form>
    </>
  );
}
