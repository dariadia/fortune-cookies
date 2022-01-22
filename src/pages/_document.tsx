import createEmotionServer from '@emotion/server/create-instance'
import Document, {
  Html,
  Main,
  NextScript,
  DocumentContext,
  Head,
} from 'next/document'
import * as React from 'react'

import createEmotionCache from '@/styles/createEmotionCache'
import { APP_PRODUCTION } from 'constants/locations'
import { TEXTS } from 'constants/texts'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage
    const cache = createEmotionCache()

    const { extractCriticalToChunks } = createEmotionServer(cache)

    ctx.renderPage = () =>
      originalRenderPage({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        enhanceApp: (App: any) => props =>
          <App emotionCache={cache} {...props} />,
      })

    const initialProps = await Document.getInitialProps(ctx)

    const emotionStyles = extractCriticalToChunks(initialProps.html)
    const emotionStyleTags = emotionStyles.styles.map(style => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ))

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        ...emotionStyleTags,
      ],
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat"
            rel="stylesheet"
          />
          <meta name="application-name" content={TEXTS.app_title} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={TEXTS.app_title} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#030623" />
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
