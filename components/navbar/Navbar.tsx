import React from 'react'
import Container from '../global/Container'
import Logo from './Logo'
import NavSearch from './NavSearch'
import DarkMode from './DarkMode'
import CartButton from './CartButton'
import LinksDropdowns from './LinksDropdowns'

function Navbar() {
  return (
    <nav className='border-b'>
        <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8'>
        <Logo/>
        <NavSearch/>
        <div className='flex items-center gap-4'>
          <CartButton/>
          <DarkMode/>
          <LinksDropdowns/>
        </div>
        </Container>
    </nav>
  )
}

export default Navbar