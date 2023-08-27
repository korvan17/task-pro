import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import * as React from 'react';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TextField } from '@mui/material';

export default function Calendar() {

  const date = new Date();
  const [value, setValue] = useState(dayjs(date));

  const theme = createTheme({
    palette: {
      primary: {
        light: '#cbe2bf',
        main: '#BEDBB0',
        dark: '#85997b',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });


  return (
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
        renderInput={props => <TextField {...props} />}
        sx={{
          svg: { fill: '#BEDBB0' },
          input: { color: '#BEDBB0' },
          label: { color: 'rgba(255, 255, 255, 0.50)' },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 0,
            '&:focus': { border: 0 },
          },
        }}
      />
    </ThemeProvider>
  );
}
