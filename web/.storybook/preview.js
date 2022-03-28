import CssBaseline from '@mui/material/CssBaseline'
import { ApolloProvider } from '@apollo/client'
import { css } from '@emotion/react'
import React, { useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import client from '../src/config/apollo-client'
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
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <DebugObserver />
          <CssBaseline />
          <Story {...context} />
        </RecoilRoot>
      </ThemeProvider>
    </ApolloProvider>
  )
}
export const decorators = [withThemeProvider]

// Next.jsのimgを上書き
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} style={{ objectFit: 'contain' }} />,
})
