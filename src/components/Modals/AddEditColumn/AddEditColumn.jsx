import css from './AddEditColumn.module.css';
import iconDefs from '../../../icons/sprite.svg';

export default function AddEditColumn({ title, onClose, isEditing = false }) {
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
      <form>
        <label className={css.label}>
          <input
            className={css.input}
            type="text"
            name="title"
            placeholder="Title"
          />
        </label>
        <button className={css.btn}>Add</button>
      </form>
    </>
  );
}
