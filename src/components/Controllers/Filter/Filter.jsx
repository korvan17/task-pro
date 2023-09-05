import React, { useState } from 'react';

import { useTheme } from '@emotion/react';
import iconDefs from '../../../icons/sprite.svg';
import css from './Filter.module.css';

export default function FIlter() {
  const colors = [
    { id: 1, priority: 'without', color: 'gray' },
    { id: 2, priority: 'low', color: '#8FA1D0' },
    { id: 3, priority: 'medium', color: '#E09CB5' },
    { id: 4, priority: 'high', color: '#BEDBB0' },
  ];

  // const defaultColor = colors.find(color => color.priority === 'without').color;

  // const [selectedColor, setSelectedColor] = useState(defaultColor);

  // const handleColorChange = color => {
  //   setSelectedColor(color);
  // };
  const theme = useTheme();
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const toggleFilters = () => {
    setIsFiltersVisible(!isFiltersVisible);
  };

  // const [selectedColor, setSelectedColor] = useState(null);

  // const handleRadioButtonChecked = (color) => {
    
  // };

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
          {/* <div className={css.filtersChangerSelectorsInput}>
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
          </div> */}
          {colors.map(color => (
            <label
              style={{ color: theme.screensPage.filtersMenuRadioTextColor }}
              className={css.filtersChangerSelectorsInput}
              key={color.id}
            >
              <input
                type="radio"
                name="priority"
                value={color.priority}
                // onChange={() => handleColorChange(color)}
                style={{ display: 'none' }}
              />
              <span
                style={{
                  backgroundColor: color.color,
                  width: '14px',
                  height: '14px',
                  display: 'inline-block',
                  border: '#FFF',
                  outline: '#000',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
              ></span>
              {color.priority}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
