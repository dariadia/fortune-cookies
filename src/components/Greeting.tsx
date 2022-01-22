import React from 'react'
import { Box, Button, Flex, Image, Link } from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'
import { PROJECT_REPOSITORY } from 'constants/locations'

export const Greeting: React.FC = () => {
  return (
    <Box textAlign={{ base: 'center', md: 'left' }} marginTop={8}>
      <Flex
        justifyContent={{ base: 'center', md: 'left' }}
        alignItems="center"
        gridGap={2}
      >
        <Button
          as="a"
          href={PROJECT_REPOSITORY}
          target="_blank"
          leftIcon={<AiFillGithub />}
          size="sm"
        >
          Open in Github
        </Button>
        <Link href={PROJECT_REPOSITORY} isExternal rel="noopener noreferrer">
          <Image
            align="center"
            src="https://img.shields.io/github/stars/dariadia/fortune-cookies?style=social"
            alt="github stars"
          />
        </Link>
      </Flex>
    </Box>
  )
}
