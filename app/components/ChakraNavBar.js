'use client'

import { 
  Box,  
  Link, 
  Flex, 
  Heading, 
  useMediaQuery, 
  VStack, 
  Menu, 
  MenuButton,
  MenuList,
  MenuItem,
  IconButton, 
  HStack, 
  Divider
  } from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link'
import { useState, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';

export default function ChakraNavBar() {

  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");
  const [showMenu, setShowMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) { // Adjust as needed
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Flex
      m='2'
      p="2"
      bg={scrolling ? 'rgba(0, 0, 0, 0.7)' : 'black'}
      color="white"
      alignItems="center"
      justifyContent={isSmallerThan768 ? 'center' : 'space-between'}
      flexWrap="wrap"
      textAlign="center"
      position="sticky"
      top="2"
      zIndex="999"
    >
      <Heading
        size={isSmallerThan768 ? "sm" : "md"}
        fontFamily="sans-serif"
        as="a"
        href="/"
        m='2'
        borderRight={isSmallerThan768 ? '1px solid white' : 'none'} 
        pr={isSmallerThan768 ? '20' : '0'}
        // border='1px solid white'
      >
        ERIC ONTIVEROS
      </Heading>
      {isSmallerThan768 ? (
        <IconButton
          aria-label="Toggle Menu"
          icon={showMenu ? <CloseIcon /> : <HamburgerIcon />}
          onClick={toggleMenu}
          size="sm"
          m='2'
        />
      ) : (
        <Box m="2" ml="auto">
          <Link mx="15" fontSize="sm" as="a" fontWeight="bold" href="/about">
            About
          </Link>
          <Link mx="20" fontSize="sm" as="a" fontWeight="bold" href="/projects">
            Projects
          </Link>
          {/* <Menu>
            <MenuButton mx="4" fontSize='md' fontWeight="bold">
              Connect <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem
                color="black"
                as="a"
                href="https://www.linkedin.com/in/eontiveros"
                target="_blank"
                rel="noopener noreferrer"
                fontSize={isSmallerThan768 ? "sm" : "xl"}
              >
                LinkedIn
              </MenuItem>
            </MenuList>
          </Menu> */}
        </Box>
      )}
      {showMenu && isSmallerThan768 && (
        <HStack>
          <Link mx="0" fontSize="sm" as="a" fontWeight="bold" href="/about">
            About
          </Link>
          <Link mx="5" fontSize="sm" as="a" fontWeight="bold" href="/projects">
            Projects
          </Link>
          {/* <Menu>
            <MenuButton mx="4" fontSize="md" fontWeight="bold">
              Connect <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem
                color="black"
                as="a"
                href="https://www.linkedin.com/in/eontiveros"
                target="_blank"
                rel="noopener noreferrer"
                fontSize="sm"
              >
                LinkedIn
              </MenuItem>
            </MenuList>
          </Menu> */}
        </HStack>
      )}
      
      <IconButton
        aria-label="LinkedIn"
        icon={<FaLinkedin />}
        color="black"
        fontSize="md"
        mr="1"
        href="https://www.linkedin.com/in/eontiveros"
        target="_blank"
        rel="noopener noreferrer"
        size='sm'
        as='a'
      />
    </Flex>
  )
}





