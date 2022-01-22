import React from 'react'
import { Box } from '@chakra-ui/react'

import { Stats, CookieImage } from '@/components'

const Home: React.FC = () => {
  return (
    <Box
      display={{ md: 'flex' }}
      alignItems="center"
      minHeight="70vh"
      gap={8}
      mb={8}
      w="full"
    >
      <Box>
        <CookieImage />
        <Stats />
      </Box>
    </Box>
  )
}

export default Home
