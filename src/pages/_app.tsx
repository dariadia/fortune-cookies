import { ChakraProvider } from '@chakra-ui/react'
import { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '@fontsource/lexend/latin.css'

import defaultSEOConfig from '../../next-seo.config'
import Layout from '@/components/layout'
import createEmotionCache from '@/styles/createEmotionCache'
import customTheme from '@/styles/customTheme'
import '@/styles/globals.css'
import { TEXTS } from 'constants/texts'
import { APP_PRODUCTION } from 'constants/locations'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={customTheme}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <title>{TEXTS.app_title}</title>
          <meta name="description" content={TEXTS.app_description} />
          <meta
            name="og:image"
            property="og:image"
            content={`${APP_PRODUCTION}/assets/og-image.png`}
          />
          <meta
            name="twitter:image"
            content={`${APP_PRODUCTION}/assets/og-image.png`}
          />
          <link rel="manifest" href="/favicon/webmanifest.json" />
          <link rel="icon" href="/favicon/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        </Head>
        <DefaultSeo {...defaultSEOConfig} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </CacheProvider>
  )
}

MyApp.defaultProps = {
  emotionCache: clientSideEmotionCache,
}

export default MyApp
