import { extendTheme } from '@chakra-ui/react'
export const themes = {
  typography: {
    fontSize: 13,
  },
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

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const disabledBoxShadowComponents = ['Button', 'Popover']
const componentObj = disabledBoxShadowComponents.reduce((acc, cur) => {
  return {
    ...acc,
    [cur]: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
    },
  }
}, {})

export const themeChakra = extendTheme({
  colors,
  components: componentObj,
})
