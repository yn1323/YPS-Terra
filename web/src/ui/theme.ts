import { createTheme } from '@mui/material/styles'
export const themes = {
  palette: {
    primary: {
      main: '#FF8E3C',
      // light: '#F8F8F8',
      // dark: '',
      contrastText: '#EFEFEF',
    },
    secondary: {
      main: '#EFF0F3',
      light: '#F8F8F8',
      // dark: '',
      contrastText: '#0D0D0D',
    },
    error: {
      main: '#FF0000',
    },
    background: {
      default: '#FFFFFE',
    },
    text: {
      primary: '#222',
      secondary: '#444',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1080,
      xl: 1536,
    },
  },
}

const theme = createTheme(themes)

export default theme
