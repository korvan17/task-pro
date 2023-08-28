import css from './AddEditColumn.module.css';
import iconDefs from '../../../icons/sprite.svg';
import { AddIconButton } from 'components';
import { useState } from 'react';

export default function AddEditColumn({
  title,
  onClose,
  isEditing,
  onInputSubmit,
}) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onInputSubmit(inputValue);
    onClose();
  };
  return (
    <>
      <button className={css.closeBtn} onClick={onClose}>
        <svg width="18" height="18">
          <use xlinkHref={`${iconDefs}#icon-close`} />
        </svg>
      </button>
      <h3 className={css.titleBoard}>
        {!isEditing ? 'Add column' : 'Edit column'}
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
        <AddIconButton className={css.btn} theme={'light'}>
          <span className={css.btnSumbitAction}>Add</span>
        </AddIconButton>
      </form>
    </>
  );
}
