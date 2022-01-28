import React from 'react'
import { Box } from '@chakra-ui/react'

import { Stats, CookieImage } from '@/components'
import Link from 'next/link'
import { FORTUNE_COOKIE } from 'constants/locations'

const Home: React.FC = () => {
  return (
    <Box
      display={{ md: 'flex' }}
      alignItems="center"
      justifyContent="space-around"
      minHeight="70vh"
      gap={8}
      mb={8}
      w="full"
    >
      <Link href={FORTUNE_COOKIE}>
        <CookieImage />
      </Link>
      <Stats />
    </Box>
  )
}

export default Home
