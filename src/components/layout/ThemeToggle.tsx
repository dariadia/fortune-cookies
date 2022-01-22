import React from 'react'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { RiMoonFill, RiSunLine } from 'react-icons/ri'

export const ThemeToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label="theme toggle"
      icon={colorMode === 'light' ? <RiMoonFill /> : <RiSunLine />}
      onClick={toggleColorMode}
    />
  )
}
