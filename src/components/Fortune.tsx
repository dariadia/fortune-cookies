import React from 'react'
import { Box } from '@chakra-ui/react'

import { MotionBox } from '.'
import { Emoji, PaperScroll } from '.'

import { GOLDEN_SHADOW } from 'constants/theme'

type MessageProps = {
  text: string
  emoji?: string
  aria_label?: string
  source_link: string
  source_title: string
  source_author: string
}

export const Message: React.FC<MessageProps> = ({
  text,
  emoji,
  aria_label,
  source_link,
  source_title,
  source_author,
}) => {
  return (
    <Box position="relative" m="0 auto" width="calc(100vw - 88px)">
      <Box
        role="img"
        height="30vw"
        width="15vw"
        sx={{ filter: `drop-shadow(1px 2px 8px ${GOLDEN_SHADOW})` }}
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