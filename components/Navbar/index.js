import React from 'react'
import Image from 'next/image'
import NavbarItem from './NavbarItem';

const itens = [
 'Home',
 'Palestrantes',
 'Agenda',
 'Ingresso',
 'Increver-se',
]

function Navbar() {
  return (
    <div className='sticky shadow-md w-full h-16 flex-row'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center h-16 pl-2'>
          <Image width='158' height='50' src='/join-logo.png' />
        </div>
        <div>
          <ul className='flex justify-between'>
            {itens.map((item) => <NavbarItem key={item} label={item} />)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
