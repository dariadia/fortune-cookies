import { APP_PRODUCTION } from 'constants/locations'
import { TEXTS } from 'constants/texts'

/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: TEXTS.app_title,
  titleTemplate: '%s',
  defaultTitle: TEXTS.app_title,
  description: TEXTS.app_description,
  canonical: APP_PRODUCTION,
  openGraph: {
    url: APP_PRODUCTION,
    title: TEXTS.app_title,
    description: TEXTS.app_description,
    images: [
      {
        url: `${APP_PRODUCTION}/assets/og-image.png`,
        alt: `${TEXTS.app_title} og-image`,
      },
    ],
    site_name: TEXTS.app_title,
  },
  twitter: {
    handle: '@_DariaDear',
    cardType: 'summary_large_image',
  },
}

export default defaultSEOConfig
