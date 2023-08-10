'use client'

import { Box, Button, Container, Stack, Text, useColorModeValue, Flex } from '@chakra-ui/react'

export default function ChakraNavBar() {
  return (
    <Box
      bg={useColorModeValue('black')}
      color={useColorModeValue('white')}
    >
      <Container
        as={Stack}
        maxW={'20xl'}
        // py={1}
        // direction={{ base: 'column', md: 'row' }}
        // spacing={200}
        // justify={{ base: 'center', md: 'space-between' }}
        // align={{ base: 'center', md: 'center' }}
        
        >
        <Flex alignItems={'center'} justifyContent={'space-between'}>

            <Text fontSize='4xl' color='' as="a" href='/'>
                EO
            </Text>
            <Stack direction={'row'} spacing={6} justifyContent={'end'}>
            {/* <Box as="a" href='/'>
            Home
            </Box> */}
            <Box as="a" href='/about' >
                About
            </Box>
            <Box as="a" href='/projects' >
                Projects
            </Box>
            </Stack>
        </Flex>
      </Container>
    </Box>
  )
}





