import React from 'react'
import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  useColorMode,
  Flex,
} from '@chakra-ui/react'
import Link from 'next/link'

import { MotionBox } from '@/components'

const Page404: React.FC = () => {
  const { colorMode } = useColorMode()
  const isLightMode = colorMode === 'light'

  return (
    <Flex minHeight="70vh" direction="column" justifyContent="center">
      <MotionBox
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
        width={['100%', '70%', '60%', '60%']}
        m="0 auto"
      >
        <Image
          src={`/assets/404-${isLightMode ? 'dark' : 'light'}.png`}
          alt="Error 404 not found illustration"
          m="0 auto"
        />
      </MotionBox>
      <Box my={10}>
        <Heading textAlign="center">Nothing here.</Heading>
        <Box textAlign="center" mt={4}>
          <Text my={4}>It&apos;s Okay!</Text>
          <Link href="/" passHref>
            <Button backgroundColor={isLightMode ? 'gray.300' : 'teal.500'}>
              Let&apos;s Head Back
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>
  )
}

export default Page404
