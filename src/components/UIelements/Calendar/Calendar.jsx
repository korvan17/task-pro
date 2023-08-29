import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import * as React from 'react';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Calendar() {

  const date = new Date();

  const theme = createTheme({
    palette: {
      primary: {
        light: '#cbe2bf',
        main: '#BEDBB0',
        dark: '#85997b',
        contrastText: '#fff',
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: 'transparent',
            color: '#fff',
          },
        },
      },
      MuiPickersDay: {
        styleOverrides: {
          root: {
            color: '#fff',
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: '#fff',
            fill: '#fff',
          },
        },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            border: 0,
          },
        },
      },
    },
  });

  const [value, setValue] = useState(dayjs(date));

  return (
    <div>
      <ThemeProvider theme={theme}>
        <DatePicker
          components={{
            OpenPickerIcon: ExpandMoreIcon,
          }}
          value={value}
          label="Deadline"
          views={['month', 'day']}
          disablePast
          onChange={newValue => setValue(newValue)}
          showDaysOutsideCurrentMonth
          sx={{
            width: '150px',
            svg: { fill: '#BEDBB0' },
            input: { color: '#BEDBB0' },
            label: { color: 'rgba(255, 255, 255, 0.50)' },
          }}
        />
      </ThemeProvider>
    </div>
  );
}
