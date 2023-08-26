import css from './AddEditCard.module.css';
import iconDefs from '../../../icons/sprite.svg';
import ColorPicker from 'components/UIelements/ColorPicker/ColorPicker';

export default function AddEditCard({ title, isEditing = false }) {
  return (
    <>
      <button className={css.closeBtn}>
        <svg width="18" height="18">
          <use xlinkHref={`${iconDefs}#icon-close`} />
        </svg>
      </button>
      <h3 className={css.titleCard}>{!isEditing ? 'Add card' : 'Edit card'}</h3>
      <form>
        <label className={css.label}>
          <input
            className={css.input}
            type="text"
            name="title"
            placeholder="Title"
          />
        </label>
        <label className={css.label}>
          <textarea
            className={css.textarea}
            type="text"
            name="description"
            placeholder="Description"
          />
        </label>
        <ColorPicker />
        <button className={css.btn}>{!isEditing ? 'Add' : 'Edit'}</button>
      </form>
    </>
  );
}
