import React, { useState } from 'react';
import css from './ColorPicker.module.css';

const ColorPicker = () => {
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
    <div className={css.colorPickerBlock}>
      <label htmlFor="priority" className={css.labelTitle}>
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
              onChange={() => handleColorChange(color.color)}
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
