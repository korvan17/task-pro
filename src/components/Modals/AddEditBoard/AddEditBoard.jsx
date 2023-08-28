import css from './AddEditBoard.module.css';
import iconDefs from '../../../icons/sprite.svg';
import { Buttons } from 'components';
import IconPicker from 'components/UIelements/IconPicker/IconPicker';
import { useState } from 'react';
import BackgroundPicker from 'components/UIelements/BackgroundPicker/BackgroundPicker';

export default function AddEditBoard({ title, isEditing, onSubmit }) {
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
  };

  return (
    <>
      <button className={css.closeBtn}>
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
        <Buttons className={css.btn} theme={'light'}>
          <div className={css.btnSumbitIcon}>
            <svg width="14" height="14">
              <use xlinkHref={`${iconDefs}#icon-add`} />
            </svg>
          </div>
          <span className={css.btnSumbitAction}>
            {!isEditing ? 'Create' : 'Edit'}
          </span>
        </Buttons>
      </form>
    </>
  );
}
