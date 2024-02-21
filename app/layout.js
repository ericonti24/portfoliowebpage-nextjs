"use client"

import { ChakraProvider, background, useColorModeValue, Box } from '@chakra-ui/react'
import NavBar from './components/ChakraNavBar'
import { useEffect } from 'react'
import Footer from './components/footer'

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body style={{backgroundColor: '#2b2b2b'}}>
            <main>{children}</main>
      </body>
    </html>
  )
}
