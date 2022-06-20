import { ApolloProvider } from '@apollo/client'
import React, { useEffect } from 'react'
import client from '../src/config/apollo-client'
import * as nextImage from 'next/image'
import { RecoilRoot } from 'recoil'
import { useRecoilSnapshot } from 'recoil'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { themeChakra } from '../src/ui/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['atom', 'molecule', 'organism', 'template', 'page'],
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
    path: '/',
    asPath: '/',
    query: {},
    push() {},
  },
  chakra: {
    theme: themeChakra,
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
      <RecoilRoot>
        <DebugObserver />
        <Story {...context} />
      </RecoilRoot>
    </ApolloProvider>
  )
}
export const decorators = [withThemeProvider]

// Next.jsのimgを上書き
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} style={{ objectFit: 'contain' }} />,
})
