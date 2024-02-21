'use client'
import React from 'react';
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  Heading,
  useColorModeValue,
  useBreakpointValue,
  Grid,
  Image
} from '@chakra-ui/react';
// import { ABOUT } from '../api/data/about/aboutData';
// import selfImage from '../api/data/images/self-image3.png'

const IntroSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container maxWidth="7xl" p={{ base: 2, sm: 10 }} >
       <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={10}
        alignItems="center"
        justifyContent="center"
        mb={20}
        // border='1px solid white'
      >
        <Box textAlign={{ base: "center", md: "left" }}>
          <Heading as="h1" fontSize="8xl" fontWeight="bold" mb={2} fontFamily='sans-serif' color='teal'>
            Hi, I'm Eric
          </Heading>
          <Text fontSize="2xl" color={useColorModeValue("lightgray", "lightgray.400")} mb={1}>
            I enjoy web designing, developing and passionate about tech!
          </Text>
        </Box>
        {!isMobile && (
          <Box>
            <Image src="/_next/static/media/self-image3.f98e0bfe.png" alt="Eric's Image" borderRadius="15px 90px" boxSize="500px" />
          </Box>
        )}
      </Grid>
      {isMobile && (
        <Flex justifyContent="center" mt={8} mb={20}>
          <Box>
            <Image src="/_next/static/media/self-image3.f98e0bfe.png" alt="Eric's Image" borderRadius="15px 90px" boxSize="300px" />
          </Box>
        </Flex>
      )}
    </Container>
  );
};
export default IntroSection;

