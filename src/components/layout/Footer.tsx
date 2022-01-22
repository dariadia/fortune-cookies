import React from 'react'
import { Flex, Link, Text } from '@chakra-ui/react'

const Footer: React.FC = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>
        {new Date().getFullYear()} -
        <Link href="TODO" isExternal rel="noopener noreferrer">
          TODO
        </Link>
      </Text>
    </Flex>
  )
}

export default Footer
