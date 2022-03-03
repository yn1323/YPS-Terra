import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../src/ui/theme'
import * as nextImage from 'next/image'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  options: {
    storySort: {
      order: ['atom', 'molecule', 'organism', 'template', 'page'],
    },
  },
}

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story {...context} />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider]

// Next.jsのimgを上書き
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} style={{ objectFit: 'contain' }} />,
})
