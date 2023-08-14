'use client'

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Button,
  Image,
} from '@chakra-ui/react'

// import image from '../api/data/images/Calendar-1.jpg';

export default function Project({projects}) {
  return (<Center>
    <Stack>
    {projects.map((project) => (
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('gray')}
        boxShadow={'5xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        m={4}
      >
        <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
         <Image h={'208px'} w={'500px'} src={project.image} alt='calendar-image'/>
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
        <Stack 
          direction='row' 
          spacing={4} 
          justifyContent={'center'} 
          m={2}
        >
          <Button 
            color={useColorModeValue('white')}
            variant='outline' 
            as="a" 
            href={project.link}
            >
              Go to project
            </Button>
          <Button 
            color={useColorModeValue('white')}
            variant='outline' 
            as="a" 
            href={project.github}
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

