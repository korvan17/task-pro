import css from './AddEditColumn.module.css';
import iconDefs from '../../../icons/sprite.svg';
import { AddIconButton } from 'components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn, editColumn } from 'redux/columns/columnsOperations';
import { useTheme } from '@emotion/react';

export default function AddEditColumn({ title, onClose, isEditing, columnId }) {
  const dispatch = useDispatch();

  const theme = useTheme();

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (!isEditing) {
        await dispatch(addColumn({ title: inputValue }));
      }
      await dispatch(editColumn({ title: inputValue, id: columnId }));
      onClose();
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
      <h3 style={{ color: theme.popUp.titleColor }} className={css.titleBoard}>
        {!isEditing ? 'Add column' : 'Edit column'}
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
        <AddIconButton className={css.btn}>
          <span
            style={{ color: theme.popUp.buttonTextColor }}
            className={css.btnSumbitAction}
          >
            Add
          </span>
        </AddIconButton>
      </form>
    </>
  );
}
