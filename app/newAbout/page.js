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
import { ABOUT } from '../api/data/about/aboutData';
import selfImage from '../api/data/images/self-image3.png'

const Milestones = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });
  // const selfImage = '/_next/static/media/self-image3.f98e0bfe.png'
  // console.log(selfImage);

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
        {/* Text Content */}
        <Box textAlign={{ base: "center", md: "left" }}>
          <Heading as="h1" fontSize="7vw" fontWeight="bold" mb={2} fontFamily='sans-serif' color='white'>
            Hi, I'm Eric
          </Heading>
          <Text fontSize="2vw" color={useColorModeValue("gray.600", "gray.400")} mb={4}>
            I enjoy web designing, developing and passionate about tech!
          </Text>
        </Box>

        {/* Image */}
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
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={4} textAlign="center" color={'lightgray'}>
        Milestones
      </chakra.h3>
      {ABOUT.map((milestone) => (
        <Flex key={milestone.id} mb="10px">
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} />

              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  );
};

const Card = ({ id, title, description, date }) => {
  const isEvenId = id % 2 == 0;
  let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
  let leftValue = isEvenId ? '-15px' : 'unset';
  let rightValue = isEvenId ? 'unset' : '-15px';

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = '-15px';
    rightValue = 'unset';
    borderWidthValue = '15px 15px 15px 0';
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue('gray.100', 'gray.800')}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: '0',
        h: '0',
        borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
        borderStyle: 'solid',
        borderWidth: borderWidthValue,
        position: 'absolute',
        left: leftValue,
        right: rightValue,
        display: 'block'
      }}
    >
      <Box>
        {/* <Text fontSize="lg" color={isEvenId ? 'teal.400' : 'blue.400'}> */}
        <Text fontSize="lg" color={isEvenId ? 'gray' : 'black'}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Text fontSize="md">{description}</Text>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: '40px', md: '40px' }}
      ml={{ base: '0', md: '40px' }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue('gray.600', 'gray.200')}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

export default Milestones;

