import React, { useState } from 'react';
import css from './ColorPicker.module.css';
import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';
import { getTheme } from 'redux/auth/authSelectors';

const ColorPicker = ({
  onSelectedPriorityChange,
  onSelectedColorChange,
  defaultColor,
  currentPriority,
}) => {
  const theme = useTheme();
  const userTheme = useSelector(getTheme);
  const colors = [
    { id: 1, priority: 'low', color: '#8FA1D0' },
    { id: 2, priority: 'medium', color: '#E09CB5' },
    { id: 3, priority: 'high', color: '#BEDBB0' },
    {
      id: 4,
      priority: 'without',
      color:
        userTheme === 'dark'
          ? 'rgba(255, 255, 255, 0.30)'
          : 'rgba(22, 22, 22, 0.30)',
    },
  ];

  const foundColor = colors.find(color => color.priority === currentPriority);

  const [selectedColor, setSelectedColor] = useState(
    currentPriority ? foundColor.color : defaultColor
  );

  const handleColorChange = color => {
    setSelectedColor(color.color);
    onSelectedColorChange(color.color);
    onSelectedPriorityChange(color.priority);
  };

  return (
    <div className={css.colorPickerBlock}>
      <label
        style={{ color: theme.popUp.labelColor }}
        htmlFor="priority"
        className={css.labelTitle}
      >
        Label color
      </label>
      <div>
        {colors.map(color => (
          <label key={color.id} style={{ marginRight: '8px' }}>
            <input
              type="radio"
              name="priority"
              value={color.priority}
              checked={selectedColor === color.color}
              onChange={() => handleColorChange(color)}
              style={{ display: 'none' }}
            />
            <span
              style={{
                backgroundColor: color.color,
                width: '14px',
                height: '14px',
                display: 'inline-block',
                border:
                  selectedColor === color.color ? '2px solid #FFF' : 'none',
                outline:
                  selectedColor === color.color
                    ? `1px solid ${color.color}`
                    : 'none',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
            ></span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
