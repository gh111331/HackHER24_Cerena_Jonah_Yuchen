import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#D9EBE6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: '#AFB687',
        },
        background: {
            default: '#fff',
        },
    },
  // Add more as needed
});

export default theme;