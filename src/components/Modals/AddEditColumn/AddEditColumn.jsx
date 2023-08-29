import css from './AddEditColumn.module.css';
import iconDefs from '../../../icons/sprite.svg';
import { AddIconButton } from 'components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn, editColumn } from 'redux/columns/columnsOperations';

export default function AddEditColumn({ title, onClose, isEditing, columnId }) {
  const dispatch = useDispatch();

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
