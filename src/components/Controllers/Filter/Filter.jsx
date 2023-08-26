import React, { useState } from 'react';

import iconDefs from '../../../icons/sprite.svg';
import css from './Filter.module.css';

export default function FIlter() {
  const colors = [
    { id: 1, priority: 'low', color: '#8FA1D0' },
    { id: 2, priority: 'medium', color: '#E09CB5' },
    { id: 3, priority: 'high', color: '#BEDBB0' },
    { id: 4, priority: 'without', color: '#1616164D' },
  ];

  const defaultColor = colors.find(color => color.priority === 'without').color;

  const [selectedColor, setSelectedColor] = useState(defaultColor);

  const handleColorChange = color => {
    setSelectedColor(color);
  };

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
        <div className={css.filtersChangerLine}></div>
        <div className={css.filterChangerTitleAndButtonContainer}>
          <p className={css.filterChangerTitle}>Label color</p>
          <button className={css.filterChangerShowButton}>Show all</button>
        </div>
        <div className={css.filtersChangerSelectorsContainer}>
          <div className={css.filtersChangerSelectorsInput}>
            <input
              type="radio"
              id="withoutpriority"
              name="without priority"
              value="without priority"
            />
            <label htmlFor="withoutpriority">Without priority</label>
          </div>

          <div className={css.filtersChangerSelectorsInput}>
            <input type="radio" id="low" name="low" value="low" />
            <label htmlFor="low">Low</label>
          </div>

          <div className={css.filtersChangerSelectorsInput}>
            <input type="radio" id="medium" name="medium" value="medium" />
            <label htmlFor="medium">Medium</label>
          </div>

          <div className={css.filtersChangerSelectorsInput}>
            <input type="radio" id="high" name="high" value="high" />
            <label htmlFor="high">High</label>
          </div>
        </div>
      </div>
    </div>
  );
}
