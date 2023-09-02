import React, { useState } from 'react';

import { useTheme } from '@emotion/react';
import iconDefs from '../../../icons/sprite.svg';
import css from './Filter.module.css';

export default function FIlter() {
  // const colors = [
  //   { id: 1, priority: 'low', color: '#8FA1D0' },
  //   { id: 2, priority: 'medium', color: '#E09CB5' },
  //   { id: 3, priority: 'high', color: '#BEDBB0' },
  //   { id: 4, priority: 'without', color: '#1616164D' },
  // ];

  // const defaultColor = colors.find(color => color.priority === 'without').color;

  // const [selectedColor, setSelectedColor] = useState(defaultColor);

  // const handleColorChange = color => {
  //   setSelectedColor(color);
  // };
  const theme = useTheme();
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const toggleFilters = () => {
    setIsFiltersVisible(!isFiltersVisible);
  };
  return (
    <div className={css.filtersContainer}>
      <div className={css.filtersButtonContainer}>
        <button
          style={{ color: theme.screensPage.filterButtonColor }}
          className={css.filtersButton}
          onClick={toggleFilters}
        >
          <svg
            style={{ stroke: theme.screensPage.filterButtonColor }}
            className={css.filtersButtonIcon}
            width="16"
            height="16"
          >
            <use xlinkHref={`${iconDefs}#icon-filter`} />
          </svg>
          Filters
        </button>
      </div>
      <div
        style={{
          background: theme.screensPage.filtersMenuBackground,
          borderColor: theme.popUp.inputBorderColor,
        }}
        className={css.filtersChangerContainer}
        hidden={!isFiltersVisible}
      >
        <button
          className={css.filtersChangerContainerCloseButton}
          onClick={toggleFilters}
        >
          <svg
            style={{ stroke: theme.screensPage.filtersMenuCloseIconFill }}
            className={css.filtersChangerContainerCloseIcon}
            width="16"
            height="16"
          >
            <use xlinkHref={`${iconDefs}#icon-close`} />
          </svg>
        </button>
        <p
          style={{ color: theme.screensPage.filtersMenuTitleColor }}
          className={css.filtersChangerHeader}
        >
          Filters
        </p>
        <div
          style={{
            backgroundColor: theme.screensPage.filtersMenuSeparatorLineColor,
          }}
          className={css.filtersChangerLine}
        ></div>
        <div className={css.filterChangerTitleAndButtonContainer}>
          <p
            style={{
              color: theme.screensPage.filtersMenuLabelColor,
            }}
            className={css.filterChangerTitle}
          >
            Label color
          </p>
          <button
            style={{
              color: theme.screensPage.filtersMenuShowAllColor,
            }}
            className={css.filterChangerShowButton}
          >
            Show all
          </button>
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
