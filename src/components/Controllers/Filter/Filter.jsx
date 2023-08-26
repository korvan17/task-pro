import iconDefs from '../../../icons/sprite.svg';
import css from './Filter.module.css';

export default function FIlter() {
  return (
    <div className={css.filtersContainer}>
      <div className={css.filtersButtonContainer}>
        <button className={css.filtersButton}>
          <svg className={css.filtersButtonIcon} width="16" height="16">
            <use xlinkHref={`${iconDefs}#icon-filter`} />
          </svg>
          <h3>Filters</h3>
        </button>
      </div>
      <div className={css.filtersChangerContainer}>
        <button className={css.filtersChangerContainerCloseButton}>
          <svg
            className={css.filtersChangerContainerCloseIcon}
            width="16"
            height="16"
          >
            <use xlinkHref={`${iconDefs}#icon-close`} />
          </svg>
        </button>
        <p className={css.filtersChangerHeader}>Filters</p>
        <div></div>
        <div>
          <p></p>
          <button></button>
        </div>
        <div>
          <input type="radio" title="Without priority" />
          <input type="radio" title="Low" />
          <input type="radio" title="Medium" />
          <input type="radio" title="High" />
        </div>
      </div>
    </div>
  );
}
