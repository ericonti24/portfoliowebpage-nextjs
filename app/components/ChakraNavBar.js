'use client'

import { Box, Button, Link, Container, Stack, HStack, Text, useColorModeValue, Flex } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function ChakraNavBar() {
  return (
    <Box
      bg={useColorModeValue('black')}
      color={useColorModeValue('white')}
    >
      <Container
        as={Stack}
        maxW={'9xl'}
        py={5}
        >
        <Flex alignItems={'center'} justifyContent={'space-between'}>

            <Text fontSize='4xl' as="a" fontFamily='sans-serif' href='/'>
                Eric Ontiveros
            </Text>
            <HStack spacing={'100px'} >
            <Box as="a" fontWeight="bold" href='/about' >
                About
            </Box>
            <Box as="a" fontWeight="bold" href='/projects' w='300px'>
                Projects
            </Box>
            <Link as={NextLink} href='https://www.linkedin.com/in/eontiveros' isExternal>
              LinkedIn
            </Link>
            </HStack>
        </Flex>
      </Container>
    </Box>
  )
}





