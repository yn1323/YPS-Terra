// eslint-disable-next-line import/named
import { ApolloProvider } from '@apollo/client'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import { useRecoilSnapshot } from 'recoil'
import client from '@/config/apollo-client'
import { isProduction } from '@/config/env'
import createEmotionCache from '@/ui/createEmotionCache'
import { theme } from '@/ui/theme'

const clientSideEmotionCache = createEmotionCache()
interface MyAppProps extends AppProps {
  // eslint-disable-next-line
  emotionCache?: any
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const getLayout = Component.getLayout ?? (page => page)
  function DebugObserver() {
    const snapshot = useRecoilSnapshot()
    useEffect(() => {
      for (const node of snapshot.getNodes_UNSTABLE({
        isModified: true,
        // eslint-disable-next-line
      }) as any) {
        console.debug(node.key, snapshot.getLoadable(node))
      }
    }, [snapshot])

    return null
  }
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        {!isProduction && <DebugObserver />}
        <CacheProvider value={emotionCache}>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {getLayout(
              <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} />
              </AnimatePresence>
            )}
          </ThemeProvider>
        </CacheProvider>
      </RecoilRoot>
    </ApolloProvider>
  )
}

export default MyApp
