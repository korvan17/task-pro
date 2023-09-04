import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getMonth, getYear } from 'date-fns';
import s from './NewCalendar.module.css';
import { CalendarButton } from './NewButton';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { useSelector } from 'react-redux';
import { getTheme } from 'redux/auth/authSelectors';
import { useTheme } from '@emotion/react';

const NewCalendar = ({
  onDate = () => null,
  deadline = String(new Date()),
  onDateChange,
}) => {
  const userTheme = useSelector(getTheme);
  const theme = useTheme();
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

  const setCalendarTheme = () => {
    switch (userTheme) {
      case 'light':
        return [s.lightPopperCustomClass, s.lightHeaderWrapper];
      case 'dark':
        return [s.popperCustomClass, s.headerWrapper];
      case 'violet':
        return [s.violetPopperCustomClass, s.violetHeaderWrapper];
      default:
        return [s.lightPopperCustomClass, s.lightHeaderWrapper];
    }
  };

  return (
    <DatePicker
      dateFormat="yyyy, MMMM ,d"
      selected={Date.parse(startDate)}
      calendarClassName={s.calendarContainer}
      popperClassName={setCalendarTheme()[0]}
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
        <div className={setCalendarTheme()[1]}>
          <button
            style={{ color: theme.popUp.titleColor }}
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
            type="button"
          >
            {'<'}
          </button>
          <div>
            <span style={{ color: theme.popUp.titleColor }}>
              {months[getMonth(date)]} {getYear(date)}
            </span>
          </div>
          <button
            style={{ color: theme.popUp.buttonBackground }}
            // className={s.nextMonthBtn}
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
