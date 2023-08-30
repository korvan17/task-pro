import { forwardRef } from 'react';
import s from './NewButton.module.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const CalendarButton = forwardRef(({ value, onClick }, ref) => {
  const currentDays = new Date(value).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const valueDay = currentDays.split(',');
  const result = valueDay[0] + ',' + value.split(',')[1] + value.split(',')[2];

  return (
    <div className={s.container}>
      <h4 className={`${s.title}`}>Deadline</h4>
      <button
        className={`${s.input_field}`}
        onClick={onClick}
        ref={ref}
        type="button"
      >
        {result}
        <ExpandMoreIcon />
      </button>
    </div>
  );
});

CalendarButton.displayName = 'CalendarButton';