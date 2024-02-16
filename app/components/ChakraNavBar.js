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
  IconButton
  } from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link'
import { useState } from 'react';

export default function ChakraNavBar() {

  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <Flex p="4" bg="black" color="white" alignItems="center" justifyContent="center" flexWrap="wrap" textAlign="center">
      <VStack>
        <Box mb={isSmallerThan768 ? 4 : 0}>
          <Heading size="xl" fontFamily='sans-serif' as='a' href='/'>Eric Ontiveros</Heading>
        </Box>
        {isSmallerThan768 ? (
          <IconButton
            aria-label="Toggle Menu"
            icon={showMenu ? <CloseIcon /> : <HamburgerIcon />}
            onClick={toggleMenu}
          />
        ) : (
          <Box mt={isSmallerThan768 ? 4 : 0}>
            <Link mx="15" fontSize="xl" as="a" fontWeight="bold" href='/about'>
              About
            </Link>
            <Link mx="20" fontSize="xl" as="a" fontWeight="bold" href='/projects'>
              Projects
            </Link>
            <Menu>
              <MenuButton
                mx="4" 
                fontSize="xl"
                fontWeight="bold"
              >
                Connect <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem 
                  color='black' 
                  as="a" 
                  href='https://www.linkedin.com/in/eontiveros' 
                  // isExternal
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  LinkedIn
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        )}
        {showMenu && isSmallerThan768 && (
          <Box mt={4}>
            <Link mx="15" fontSize="xl" as="a" fontWeight="bold" href='/about'>
              About
            </Link>
            <Link mx="20" fontSize="xl" as="a" fontWeight="bold" href='/projects'>
              Projects
            </Link>
            <Menu>
              <MenuButton
                mx="4" 
                fontSize="xl"
                fontWeight="bold"
              >
                Connect <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem 
                  color='black' 
                  as="a" 
                  href='https://www.linkedin.com/in/eontiveros' 
                  // isExternal
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  LinkedIn
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        )}
      </VStack>
    </Flex>
  )
}





