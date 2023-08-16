"use client"

import { ChakraProvider, background, useColorModeValue, Box } from '@chakra-ui/react'
import NavBar from './components/ChakraNavBar'
import Footer from './components/footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{backgroundColor: '#2b2b2b'}}>
          <ChakraProvider>
            <NavBar />
            <main>{children}</main>
            {/* <Footer /> */}
            <div 
              style={{ marginTop: '80vh'}}>
              {/* <Footer /> */}
            </div>
          </ChakraProvider>
      </body>
    </html>
  )
}
