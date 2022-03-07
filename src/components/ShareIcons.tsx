import React from 'react'

import { META_TEXTS, HASHTAG, HASHTAGS_ARRAY } from 'constants/texts'
import { GOLDEN_SHADOW, SHARE_ICON_SIZE } from 'constants/theme'

import {
  EmailShareButton,
  FacebookShareButton,
  LivejournalShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LivejournalIcon,
  TelegramIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WhatsappIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
} from 'react-share'
import { Box, Flex } from '@chakra-ui/react'
import { APP_PRODUCTION } from 'constants/locations'

type ShareRowProps = {
  shareUrl: string
  truncatedText?: string
  url?: string
}

export const ShareIcons: React.FC<ShareRowProps> = props => (
  <Flex
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    m="2rem 0"
    sx={{
      '&>div>button': {
        m: '13px 7px',
      },
      '&>div>button:hover': {
        filter: `drop-shadow(0.5px 1px 4px ${GOLDEN_SHADOW})`,
        transition: '0.2s filter',
      },
    }}
  >
    <Box>
      <FacebookShareButton
        url={props.shareUrl}
        quote={`${META_TEXTS.fortune_told_me}: ${props.truncatedText}`}
        hashtag={HASHTAG}
      >
        <FacebookIcon size={SHARE_ICON_SIZE} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={props.shareUrl}
        hashtags={HASHTAGS_ARRAY}
        title={META_TEXTS.fortune_title}
      >
        <TwitterIcon size={SHARE_ICON_SIZE} round />
      </TwitterShareButton>
      <VKShareButton
        url={props.shareUrl}
        title={META_TEXTS.fortune_title}
        image={`${APP_PRODUCTION}/assets/og-image.png`}
      >
        <VKIcon size={SHARE_ICON_SIZE} round />
      </VKShareButton>
      <LivejournalShareButton
        url={props.shareUrl}
        title={META_TEXTS.fortune_title}
        description={`${META_TEXTS.fortune_told_me}: ${props.truncatedText}`}
      >
        <LivejournalIcon size={SHARE_ICON_SIZE} round />
      </LivejournalShareButton>
    </Box>
    <Box p="2">
      <TelegramShareButton
        url={props.shareUrl}
        title={META_TEXTS.fortune_title}
      >
        <TelegramIcon size={SHARE_ICON_SIZE} round />
      </TelegramShareButton>
      <FacebookMessengerShareButton
        url={props.shareUrl}
        appId="2001449690035746"
        redirectUri={props.url}
      >
        <FacebookMessengerIcon size={SHARE_ICON_SIZE} round />
      </FacebookMessengerShareButton>
      <ViberShareButton
        url={props.shareUrl}
        separator={`\n`}
        title={META_TEXTS.fortune_title}
      >
        <ViberIcon size={SHARE_ICON_SIZE} round />
      </ViberShareButton>
      <WhatsappShareButton
        url={props.shareUrl}
        title={META_TEXTS.fortune_title}
        separator={`\n`}
      >
        <WhatsappIcon size={SHARE_ICON_SIZE} round />
      </WhatsappShareButton>
      <EmailShareButton
        url={props.url || ''}
        subject={META_TEXTS.fortune_title}
        body={`See mine here ${props.shareUrl}\n\nOR\n\n${META_TEXTS.fortune_description}`}
        separator={`\n 🥠 💙 💙 💙 🥠 \n`}
      >
        <EmailIcon size={SHARE_ICON_SIZE} round />
      </EmailShareButton>
    </Box>
  </Flex>
)
