import React from 'react'
import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { Footer } from './Footer'
import { Header } from './Header'

type LayoutProps = {
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box m="0 auto" maxWidth={800} transition="0.5s ease-out">
      <Box m="8">
        <Header />
        <Box as="main" my={22}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  )
}
