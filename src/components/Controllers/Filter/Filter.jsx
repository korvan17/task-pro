import React, { useEffect, useState } from 'react';

import { useTheme } from '@emotion/react';
import iconDefs from '../../../icons/sprite.svg';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { selectFilter, setFilter } from '../../../redux/filterSlice';
import { useSelector } from 'react-redux';

export default function FIlter() {
  const colors = [
    { id: 1, priority: 'without', color: 'gray' },
    { id: 2, priority: 'low', color: '#8FA1D0' },
    { id: 3, priority: 'medium', color: '#E09CB5' },
    { id: 4, priority: 'high', color: '#BEDBB0' },
  ];

  const theme = useTheme();
  const dispatch = useDispatch();
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const toggleFilters = () => {
    setIsFiltersVisible(!isFiltersVisible);
  };
  const getFilterState = useSelector(selectFilter);

  const [selectedColor, setSelectedColor] = useState(null);

  const handleRadioButtonChecked = color => {
    setSelectedColor(color.color);
    dispatch(setFilter(color.priority));
  };

  const hadleShowAll = () => {
    setSelectedColor(null);
    dispatch(setFilter(''));
  };

  useEffect(() => {
    setSelectedColor(getFilterState);
  }, [getFilterState]);

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
            onClick={hadleShowAll}
            style={{
              color: theme.screensPage.filtersMenuShowAllColor,
            }}
            className={css.filterChangerShowButton}
          >
            Show all
          </button>
        </div>
        <div className={css.filtersChangerSelectorsContainer}>
          {colors.map(color => (
            <label
              style={{
                color:
                  selectedColor === color.color
                    ? theme.screensPage.filtersMenuSelectedRadioTextColor
                    : theme.screensPage.filtersMenuRadioTextColor,
              }}
              className={css.filtersChangerSelectorsInput}
              key={color.id}
            >
              <input
                type="radio"
                name="priority"
                value={color.priority}
                onChange={() => handleRadioButtonChecked(color)}
                style={{ display: 'none' }}
              />
              <span
                style={{
                  backgroundColor: color.color,
                  width: '14px',
                  height: '14px',
                  display: 'inline-block',
                  border:
                    selectedColor === color.color
                      ? `2px solid ${theme.screensPage.radioCircleColor}`
                      : 'none',
                  outline:
                    selectedColor === color.color
                      ? `1px solid ${color.color}`
                      : 'none',
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
