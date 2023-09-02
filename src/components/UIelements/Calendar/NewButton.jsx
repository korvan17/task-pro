import { forwardRef } from 'react';
import s from './NewButton.module.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const CalendarButton = forwardRef(({ value, onClick }, ref) => {
  const currentDate = new Date();
  const inputDate = new Date(value);
  
  const isToday = (
    currentDate.getDate() === inputDate.getDate() &&
    currentDate.getMonth() === inputDate.getMonth() &&
    currentDate.getFullYear() === inputDate.getFullYear()
  );
  
  const currentDays = inputDate.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  
  const valueDay = currentDays.split(',');
  let result = valueDay[0] + ',' + value.split(',')[1] + value.split(',')[2];
  
  if (isToday) {
    result = 'Today, ' + value.split(',')[1] + value.split(',')[2];
  }

  return (
    <div className={s.container}>
      {/* <h4 className={`${s.title}`}>Deadline</h4> */}
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