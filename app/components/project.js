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
} from '@chakra-ui/react'

export default function Project({projects}) {

  return (<Center>
    <Stack spacing="24">
      {projects.map((project, index) => (
      <Box
        maxW={'500px'}
        // width={'100px'}
        height={'450px'}
        w={'full'}
        bg={useColorModeValue('gray')}
        boxShadow={'5xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        m={4}
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
            color={useColorModeValue('white')}
            variant='outline' 
            as="a" 
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            >
              Go to project
            </Button>
          <Button 
            color={useColorModeValue('white')}
            variant='outline' 
            as="a" 
            href={project.github}
            target='_blank'
            rel='noopener noreferrer'
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

