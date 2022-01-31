import React from 'react'

import { Box, Flex, Tooltip, useColorMode } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

import { MotionBox } from '@/components'
import { FORTUNE_COOKIE } from 'constants/locations'
import { GOLDEN_SHADOW } from 'constants/theme'

type ImageProps = {
  label?: string
  src: string
}

const ImageBox: React.FC<ImageProps> = ({ label, src }) => {
  return (
    <Tooltip hasArrow aria-label={label} label={label} placement="auto-end">
      <Box mx={2}>
        <Image src={src} alt={label} title={label} height={33} width={33} />
      </Box>
    </Tooltip>
  )
}

export const CookieImage: React.FC = () => {
  const { colorMode } = useColorMode()

  return (
    <Box>
      <MotionBox
        animate={{ y: 20, scale: 0.97 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
        my={8}
        maxWidth={[240, 320]}
        mx="auto"
        sx={{ cursor: 'pointer' }}
        filter={`drop-shadow(1px 2px 8px ${GOLDEN_SHADOW})`}
      >
        <Link href={`/${FORTUNE_COOKIE}`}>
          <Box
            background="url('/assets/fortune-cookie.svg') center no-repeat"
            width={350}
            height={350}
            alt="floating fortune cookie"
          />
        </Link>
      </MotionBox>

      <Flex my={4} justifyContent="center" alignItems="center">
        <ImageBox src={`/assets/nextjs-icon-${colorMode}.svg`} label="NextJS" />
        <ImageBox
          src="/assets/chakra-ui-logomark-colored.svg"
          label="Chakra UI"
        />
        <ImageBox src="/assets/ts-logo-512.svg" label="TypeScript" />
      </Flex>
    </Box>
  )
}
