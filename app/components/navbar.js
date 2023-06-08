import React from 'react'
import Link from 'next/Link'

const NavBar = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <Link href='/'>Eric's Portfolio</Link>
      </div>
      <div className='links'>
        <Link href='/projects'>Projects</Link>
        <Link href='/about'>About</Link>
      </div>
    </header>
  )
}

export default NavBar
