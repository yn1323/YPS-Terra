// eslint-disable-next-line import/named
import { ApolloProvider } from '@apollo/client'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import client from '@/config/apollo-client'
import createEmotionCache from '@/ui/createEmotionCache'
import { theme } from '@/ui/theme'

const clientSideEmotionCache = createEmotionCache()
interface MyAppProps extends AppProps {
  emotionCache?: any
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </RecoilRoot>
    </ApolloProvider>
  )
}

export default MyApp
