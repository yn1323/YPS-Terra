import CssBaseline from '@mui/material/CssBaseline'
import { css } from '@emotion/react'
import React, { useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../src/ui/theme'
import * as nextImage from 'next/image'
import { RecoilRoot } from 'recoil'
import { useRecoilSnapshot } from 'recoil'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['atom', 'molecule', 'organism', 'template', 'page'],
    },
  },
}

const withThemeProvider = (Story, context) => {
  function DebugObserver() {
    const snapshot = useRecoilSnapshot()
    useEffect(() => {
      for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
        console.debug(node.key, snapshot.getLoadable(node))
      }
    }, [snapshot])

    return null
  }
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <DebugObserver />
        <CssBaseline />
        <Story {...context} />
      </RecoilRoot>
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider]

// Next.jsのimgを上書き
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} style={{ objectFit: 'contain' }} />,
})
