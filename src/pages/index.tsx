import React from 'react'
import { Box } from '@chakra-ui/react'

import { Stats, CookieImage } from '@/components'

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
      <CookieImage />
      <Stats />
    </Box>
  )
}

export default Home
