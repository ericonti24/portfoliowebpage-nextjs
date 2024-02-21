'use client'

import {useState} from 'react'
import { KEYBOARDS } from '../api/data/images/keyboards/keyboardData'
import '../styles.css'
import { Box, Flex, Heading, Text, VStack, Grid } from '@chakra-ui/react';


const AboutSection = () => {

  const [keyboards, setKeyboards] = useState(KEYBOARDS)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <Grid
      id="about-section"
      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
      gap={8}
      justifyItems="center"
      textAlign='center'
      mt={8}
      // border='1px solid white'
    >
      <Box w="100%" textAlign="center" gridColumn="1 / -1">
        <Heading mb={4}>ABOUT ME</Heading>
      </Box>
      <Box p='4' maxW='sm'>
        <Heading mb={4}>Get to know me!</Heading>
        <Text fontSize="lg">
          Working in IT with hardware and then wanting to explore the software engineering side, I attended Flatiron school in 2021. After schooling, I continued to build and improve personal projects, as well as to learn different programming languages, frameworks, and tools.
        </Text>
        <Text fontSize="lg" mt={4}>
          I enjoy collaborating with others, solving problems, and continuously learning to improve my skills.
        </Text>
      </Box>
      <Box p='4'>
        <Heading mb={4}>My Skills</Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Box bg="teal" p={2} textAlign="center" borderRadius={8}>
            <Text>JavaScript</Text>
          </Box>
          <Box bg="teal" p={2} textAlign="center" borderRadius={8}>
            <Text>Ruby</Text>
          </Box>
          <Box bg="teal" p={2} textAlign="center" borderRadius={8}>
            <Text>HTML/CSS</Text>
          </Box>
          <Box bg="teal" p={2} textAlign="center" borderRadius={8}>
            <Text>React</Text>
          </Box>
          <Box bg="teal" p={2} textAlign="center" borderRadius={8}>
            <Text>Next.js</Text>
          </Box>
          <Box bg="teal" p={2} textAlign="center" borderRadius={8}>
            <Text>jQuery</Text>
          </Box>
          <Box bg="teal" p={2} textAlign="center" borderRadius={8}>
            <Text>Rails</Text>
          </Box>
          <Box bg="teal" p={2} textAlign="center" borderRadius={8}>
            <Text>Github</Text>
          </Box>
          <Box bg="teal" p={2} textAlign="center" borderRadius={8}>
            <Text>Postman</Text>
          </Box>
        </Grid>
      </Box>
    </Grid>
  )
}

export default AboutSection
