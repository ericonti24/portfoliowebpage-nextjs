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

// const IMAGE =
//   'https://scontent-lax3-2.xx.fbcdn.net/v/t1.15752-9/367683708_820190056268453_6084955692198487598_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=rHVD4PHgUgYAX89ct6C&_nc_ht=scontent-lax3-2.xx&oh=03_AdTuZNcm5vyki17lHvCsBXwPIcOc_52WUf1r8ogqHPohsQ&oe=6504E0D5'

// const IMAGE = '/_next/static/media/self-image.b7269e12.png'
// const IMAGE = '/_next/static/media/self-image2.0185eba6.png'
const IMAGE = '/_next/static/media/self-image3.f98e0bfe.png'

// console.log(selfImage);

export default function ProductSimple() {
  return (
    <Flex>
        <Box p='60'>
        <Heading color={'white'} fontFamily='sans-serif' fontSize="170px">Hi, I'm Eric.</Heading>
        <Text color='white' p='2' fontSize="40px">Web designer, developer and tech enthusiast!</Text>
        </Box>
        <Spacer />
          <Box
            // role={'group'}
            // // p={6}
            // p='4'
            // maxW={'300px'}
            // w={'full'}
            // bg={useColorModeValue('black')}
            // boxShadow={'2xl'}
            // rounded={'lg'}
            // // pos={'relative'}
            // zIndex={1}
            flex="10"
            p='20'
            boxSize={'900'}
            // bg={useColorModeValue('black')}
            // boxShadow={'2xl'}
            // maxW={'400px'}
            // zIndex={1}
            
          >
              <Image
                // rounded={'lg'}
                // height={300}
                // width={400}
                // boxSize={'500'}
                // objectFit={'cover'}
                // maxW={'400px'}
                boxSize='700px'
                src={IMAGE}
                alt="#"
                // borderRadius="full"
                borderRadius="15px 90px"
              />
            </Box>
        
    </Flex>
    
  )
}