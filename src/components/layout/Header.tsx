import React from 'react'
import { Box, Flex, Heading, Link } from '@chakra-ui/react'

import ThemeToggle from './ThemeToggle'
import { DANNI_PORTFOLIO } from 'constants/locations'

export const Header: React.FC = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Heading as="h1" size="md">
        <Link href={DANNI_PORTFOLIO} isExternal rel="noopener noreferrer">
          Danni&apos;s portfolio
        </Link>
      </Heading>
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  )
}
