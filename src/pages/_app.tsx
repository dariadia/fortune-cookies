import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { DefaultSeo } from 'next-seo'
import { AppProps as NextAppProps } from 'next/app'
import '@fontsource/lexend/latin.css'

import defaultSEOConfig from '../../next-seo.config'
import { Layout } from '@/components/layout'
import createEmotionCache from '@/styles/createEmotionCache'
import customTheme from '@/styles/customTheme'
import '@/styles/globals.css'

const clientSideEmotionCache = createEmotionCache()

interface AppProps extends NextAppProps {
  emotionCache?: EmotionCache
}

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) => {
  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={customTheme}>
        <DefaultSeo {...defaultSEOConfig} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </CacheProvider>
  )
}

App.defaultProps = {
  emotionCache: clientSideEmotionCache,
}

export default App
