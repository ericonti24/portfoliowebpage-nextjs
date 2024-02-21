import { Flex, Button, IconButton } from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';

export default function ChakraNavBar({ scrollToSection }) {

  const scrollWithOffset = (section) => {
    const offset = 80; //adjust to keep navbar above section 
    scrollToSection(section, offset);
  };

  const reloadPage = () => {
    window.location.href = window.location.pathname;
  };

  return (
    <Flex
      
      p="5"
      bg="black"
      color="white"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      textAlign="center"
      position="sticky"
      top="0"
      zIndex="999"
      borderRadius="10"
      maxW={{ base: '100%', md: '100%', lg: '100%' }} // Adjust max width based on screen size
      mx="auto" // Center the navbar horizontally
    >
      <Button
        onClick={reloadPage}
        variant="ghost"
        _hover={{ color: 'teal', bg: 'transparent' }}
        fontFamily="sans-serif"
        color="white"
        // flex="1" 
        mr="auto"
      >
        ERIC ONTIVEROS
      </Button>
      <Flex
        // flex="4" 
        flex={{ base: 1, md: 2 }}
        justifyContent={{ base: 'space-between', md: 'flex-end' }} 
        alignItems="center"
        w="100%" 
        mb={{ base: 1, md: 0 }} 
      >
        <Button
          onClick={() => scrollWithOffset('milestones')}
          variant="ghost"
          _hover={{ color: 'teal', bg: 'transparent' }}
          mr={2}
          color="white"
          fontSize={{ base: 'sm', md: 'md' }}
        >
          Milestones
        </Button>
        <Button
          onClick={() => scrollWithOffset('about')}
          variant="ghost"
          _hover={{ color: 'teal', bg: 'transparent' }}
          mr={4}
          color="white"
          fontSize={{ base: 'sm', md: 'md' }}
        >
          About
        </Button>
        <Button
          onClick={() => scrollWithOffset('project')}
          variant="ghost"
          _hover={{ color: 'teal', bg: 'transparent' }}
          mr={4}
          color="white"
          fontSize={{ base: 'sm', md: 'md' }}
        >
          Projects
        </Button>
        <IconButton
        aria-label="LinkedIn"
        icon={<FaLinkedin />}
        color="black"
        fontSize="md"
        href="https://www.linkedin.com/in/eontiveros"
        target="_blank"
        rel="noopener noreferrer"
        size="sm"
        as="a"
      />
      </Flex>
    </Flex>
  );
}







