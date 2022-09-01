import React from 'react'
import Image from 'next/image'
import NavbarItem from './NavbarItem';

const itens = [
 'Call For Papers',
 'Increver-se',
]

function Navbar() {
  return (
    <div className='sticky shadow-md w-full h-16 flex-row'>
      <div className='flex items-center justify-between px-4'>
        <div className='flex items-center h-16 pl-2'>
          <Image width='158' height='50' src='/join-logo.png' />
        </div>
        <div>
          <ul className='flex justify-between'>
            <NavbarItem href='https://bit.ly/joinc4p22'>Call For Papers</NavbarItem>
            <NavbarItem href='https://bit.ly/joiningresso22'>Inscrever-se</NavbarItem>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
