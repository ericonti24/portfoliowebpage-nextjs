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


const IMAGE =
  'https://scontent-lax3-2.xx.fbcdn.net/v/t1.15752-9/367683708_820190056268453_6084955692198487598_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=rHVD4PHgUgYAX89ct6C&_nc_ht=scontent-lax3-2.xx&oh=03_AdTuZNcm5vyki17lHvCsBXwPIcOc_52WUf1r8ogqHPohsQ&oe=6504E0D5'

export default function ProductSimple() {
  return (
    <Flex>
        <Box p='40'>
        <Heading color={'white'} fontFamily='serif' size='4xl'>Hi, I'm Eric.</Heading>
        <Text color='white' p='4'>Web designer, developer and tech enthusiast!</Text>
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
            
            p='20'
            boxSize={'1000'}
            // bg={useColorModeValue('black')}
            // boxShadow={'2xl'}
            // maxW={'400px'}
            // zIndex={1}
            
          >
            <Box
              rounded={'lg'}
              // mt={-12}
              pos={'relative'}
              height={'300px'}
              _after={{
                // transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 0,
                left: 0,
                backgroundImage: `url(${IMAGE})`,
                filter: 'blur(30px)',
                zIndex: -1,
              }}
              // _groupHover={{
              //   _after: {
              //     filter: 'blur(20px)',
              //   },
              // }}
            >
              <Image
                rounded={'lg'}
                // height={300}
                // width={400}
                // boxSize={'500'}
                // objectFit={'cover'}
                // maxW={'400px'}
                src={IMAGE}
                alt="#"
              />
            </Box>
        </Box>
    </Flex>
    
  )
}