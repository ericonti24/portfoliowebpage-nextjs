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
  HStack,
  useMediaQuery,
  Spacer,
  
} from '@chakra-ui/react'
import selfImage from './api/data/images/self-image3.png'
const IMAGE = '/_next/static/media/self-image3.f98e0bfe.png'

export default function ProductSimple() {
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");
  return (
    // <Center 
    //   width='100%' 
    //   height='100%'
    //   textAlign={'center'}
    //   // border='1px solid white'
    //   p="40px"
    // >
    //   <Flex
    //     minWidth='max-content' 
    //     alignItems='center'
    //     gap='20'
    //   >
    //     <Box>
    //     <Heading 
    //       color={'white'} 
    //       fontFamily='sans-serif'  
    //       fontSize='7vw'
    //     >
    //       Hi, I'm Eric
    //     </Heading>
    //     <Text 
    //       color='white'
    //       fontSize="2vw"
    //     >
    //       Web designer, developer and tech enthusiast!
    //     </Text>
    //     </Box>
    //     <Spacer />
    //       <Box>
    //           <Image
    //             src={IMAGE}
    //             alt="#"
    //             borderRadius="15px 90px"
    //           />
    //         </Box>
    // </Flex>
    // </Center>
    <Flex 
      alignItems="center" 
      justifyContent="center" 
      p="14"
    >
      <HStack>
        <Box color='white' mb={isSmallerThan768 ? 4 : 0} mx='20'>
          <Heading 
            fontSize='7vw'
            fontFamily='sans-serif' 
          >
            Hi, I'm Eric
          </Heading>
          <Text 
            fontSize="2vw"
          >
            I enjoy web designing, developing and most things tech!
          </Text>
        </Box>
        <Box mb={isSmallerThan768 ? 4 : 0} >
          <Image
            src={IMAGE}
            alt="#"
            borderRadius="15px 90px"
            
          />
        </Box>
      </HStack>
    </Flex>
  )
}