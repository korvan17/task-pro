import css from './AddEditColumn.module.css';
import iconDefs from '../../../icons/sprite.svg';
import { Buttons } from 'components';
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
  };
  return (
    <>
      <button className={css.closeBtn}>
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
        <Buttons className={css.btn} theme={'light'}>
          <div className={css.btnSumbitIcon}>
            <svg width="14" height="14">
              <use xlinkHref={`${iconDefs}#icon-add`} />
            </svg>
          </div>
          <span className={css.btnSumbitAction}>Add</span>
        </Buttons>
      </form>
    </>
  );
}
