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
import selfImage from './api/data/images/self-image3.png'
const IMAGE = '/_next/static/media/self-image3.f98e0bfe.png'

// console.log(selfImage);

export default function ProductSimple() {
  return (
    <Flex>
        <Box p='60'>
        <Heading color={'white'} fontFamily='sans-serif' fontSize="170px" p='20'>Hi, I'm Eric.</Heading>
        <Text color='white' p='20' fontSize="40px">Web designer, developer and tech enthusiast!</Text>
        </Box>
        <Spacer />
          <Box
            flex="10"
            p='20'
            boxSize={'900'}
          >
              <Image
                boxSize='700px'
                src={IMAGE}
                alt="#"
                borderRadius="15px 90px"
              />
            </Box>
        
    </Flex>
  )
}