import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getMonth, getYear } from 'date-fns';
import s from './NewCalendar.module.css';
import { CalendarButton } from './NewButton';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const NewCalendar = ({
  onDate = () => null,
  deadline = String(new Date()),
  onDateChange,
}) => {
  const [startDate, setStartDate] = useState(deadline);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  useEffect(() => {
    onDate(startDate);
  }, [onDate, startDate]);
  // console.log(startDate)

  return (
    <DatePicker
      dateFormat="yyyy, MMMM ,d"
      selected={Date.parse(startDate)}
      calendarClassName={s.calendarContainer}
      popperClassName={s.popperCustomClass}
      calendarStartDay={1}
      customInput={
        <CalendarButton
          value={String(startDate)}
          onClick={e => {
            console.log(e.target);
          }}
        />
      }
      onChange={date => {
        setStartDate(String(date));
        onDateChange(date);
      }}
      minDate={new Date()}
      wrapperClassName={s.calendar}
      weekNumber={5}
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className={s.headerWrapper}>
          <button
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
            type="button"
          >
            {'<'}
          </button>
          <div>
            <span>
              {months[getMonth(date)]} {getYear(date)}
            </span>
          </div>
          <button
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
            type="button"
          >
            {'>'}
          </button>
        </div>
      )}
    />
  );
};

export default NewCalendar;
