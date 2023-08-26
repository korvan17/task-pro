import iconDefs from '../../../icons/sprite.svg';
import css from './Filter.module.css';

export default function FIlter() {
  return (
    <div>
      <div>
        <button>
          <svg className={css} width="16" height="16">
            <use xlinkHref={`${iconDefs}#icon-theme`} />
          </svg>
          <h3>Filter</h3>
        </button>
      </div>
      <div>
        <svg className={css} width="16" height="16">
          <use xlinkHref={`${iconDefs}#icon-theme`} />
        </svg>
        <p>Filters</p>
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
