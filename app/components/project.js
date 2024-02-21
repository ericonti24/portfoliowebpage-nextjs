// 'use client'

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  HStack,
  Avatar,
  useColorModeValue,
  Button,
  Image,
  chakra
} from '@chakra-ui/react'
import Head from 'next/head'

export default function Project({projects}) {

  return (<Center>
    <Stack spacing="24" >
    <chakra.h3 fontSize="4xl" fontWeight="bold" textAlign="center" color={'white'}>
        PROJECTS
      </chakra.h3>
      {projects.map((project, index) => (
      <Box
        maxW={'500px'}
        height={'450px'}
        w={'full'}
        bg={useColorModeValue('gray')}
        boxShadow={'5xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        key={project.id}
      >
        <Box>
        <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
         <Image h={'208px'} w={'500px'} src={project.image} alt='project-image'/>
        </Box>
        <Stack>
        <Heading
          color={useColorModeValue('white')}
          fontSize={'2xl'}
          fontFamily={'body'}
          align={'center'}
          >
            {project.title}
          </Heading>
          <Text color={'white'}>
            {project.description}
          </Text>
        </Stack>
        </Box>
        <Stack 
          direction='row' 
          spacing={4} 
          justifyContent={'center'} 
          m={6}
        >
          <Button
            _hover={{ color: 'white', bg: 'teal' }}
            color='white'
            bg={useColorModeValue('black')}
            variant='outline' 
            as="a" 
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            border='none'
            >
              Go to project
            </Button>
          <Button
            _hover={{ color: 'white', bg: 'teal' }}
            color='white'
            bg={useColorModeValue('black')}
            variant='outline' 
            as="a" 
            href={project.github}
            target='_blank'
            rel='noopener noreferrer'
            border='none'
            >
              Go to GitHub Repo
            </Button>
        </Stack>
      </Box>
    ))}
    </Stack>
  </Center>
  )
}

