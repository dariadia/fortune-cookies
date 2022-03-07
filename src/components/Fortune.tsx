import React from 'react'
import { Box, Link } from '@chakra-ui/react'

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
      <MotionBox
        initial={{ rotate: '90deg' }}
        animate={{ scale: 0.97 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
        className="fortune__wrapper"
        role="img"
        width="fit-content"
        height="fit-content"
        m="auto"
        sx={{
          filter: `drop-shadow(1px 2px 8px ${GOLDEN_SHADOW})`,
          '&>svg': {
            width: ['40vw', '220px', '260px'],
            height: ['75vw', '380px', '520px'],
            mt: ['0', '-50px', '-100px'],
          },
        }}
      >
        <PaperScroll />
      </MotionBox>
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        maxWidth={['85vw', '60vw']}
        m="auto"
        textAlign="center"
        sx={{ font: ['1rem/2rem monospace', '2rem/4rem monospace'] }}
      >
        {text}
        {emoji && (
          <>
            <br />
            <Emoji
              className="fortune-cookie_emoji"
              label={aria_label as string}
            >
              {emoji}
            </Emoji>
            <br />
          </>
        )}
        <Box className="fortune-cookie_source">
          <Link
            href={source_link}
            target="_blank"
            color="green"
            sx={{
              '&:hover': {
                filter: `drop-shadow(0.5px 1px 4px ${GOLDEN_SHADOW})`,
                transition: '0.2s all',
                textDecoration: 'none',
              },
            }}
          >
            {source_title}
          </Link>
          <br />
          {source_author}
        </Box>
      </MotionBox>
    </Box>
  )
}
