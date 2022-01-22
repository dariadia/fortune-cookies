import { DeepPartial, Theme } from '@chakra-ui/react'

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme['colors']['blackAlpha']>
> = {}

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {}

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
}

export default colors
