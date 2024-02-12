'use client'

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Spacer,
  
} from '@chakra-ui/react'
const IMAGE = '/_next/static/media/self-image3.f98e0bfe.png'

export default function ProductSimple() {
  return (
    <Center 
      width='100%' 
      height='100%'
      textAlign={'center'}
      // border='1px solid white'
      p="40px"
    >
      <Flex
        minWidth='max-content' 
        alignItems='center'
        gap='20'
      >
        <Box>
        <Heading 
          color={'white'} 
          fontFamily='sans-serif'  
          fontSize='7vw'
        >
          Hi, I'm Eric
        </Heading>
        <Text 
          color='white'
          fontSize="2vw"
        >
          Web designer, developer and tech enthusiast!
        </Text>
        </Box>
        <Spacer />
          <Box>
              <Image
                src={IMAGE}
                alt="#"
                borderRadius="15px 90px"
              />
            </Box>
    </Flex>
    </Center>
  )
}