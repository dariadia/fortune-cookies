import React from 'react'
import { Box } from '@chakra-ui/react'

import { Greeting } from '@/components'

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
        <Greeting />
      </Box>
    </Box>
  )
}

export default Home
