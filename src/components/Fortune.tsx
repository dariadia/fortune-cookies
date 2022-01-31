import React from 'react'
import { Box } from '@chakra-ui/react'

import { MotionBox } from '.'
import { Emoji, PaperScroll } from '.'

import { GOLDEN_SHADOW } from 'constants/theme'

import { FortuneCookie } from 'types'

type MessageProps = {
  userFortune: FortuneCookie
}

export const Message: React.FC<MessageProps> = props => {
  const { text, emoji, aria_label, source_link, source_title, source_author } =
    props.userFortune

  return (
    <Box m="0">
      <Box
        className="fortune__wrapper"
        role="img"
        width="fit-content"
        height="fit-content"
        m="auto"
        sx={{
          filter: `drop-shadow(1px 2px 8px ${GOLDEN_SHADOW})`,
          transform: 'rotate(90deg)',
        }}
      >
        <PaperScroll />
      </Box>
      <MotionBox
        animate={{ y: 20, scale: 0.97 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
        maxWidth="60vw"
        m="auto"
        pt="22vw"
        textAlign="center"
        sx={{ font: '2rem/4rem monospace' }}
      >
        {text}
        {emoji && (
          <Emoji className="fortune-cookie_emoji" label={aria_label as string}>
            {emoji}
          </Emoji>
        )}
        <Box className="fortune-cookie_source">
          <a href={source_link} target="_blank">
            {source_title}
          </a>{' '}
          {source_author}
        </Box>
      </MotionBox>
    </Box>
  )
}
