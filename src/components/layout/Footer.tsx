import React from 'react'
import { Flex, Link, Text } from '@chakra-ui/react'
import { DANNI_GITHUB, DANNI_PORTFOLIO } from 'constants/locations'

export const Footer: React.FC = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>
        {new Date().getFullYear()}.
        <Link href={DANNI_GITHUB} isExternal rel="noopener noreferrer" mx={4}>
          github
        </Link>
        <Link href={DANNI_PORTFOLIO} isExternal rel="noopener noreferrer">
          portfolio
        </Link>
      </Text>
    </Flex>
  )
}
