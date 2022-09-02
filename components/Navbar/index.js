import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import NavbarItem from './NavbarItem';
import Menu from './Menu';
import Drawer from './Drawer';

function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(function disableScroll(){
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "scroll"
    }
  }, [open])

  return (
    <>
      <div className='sticky flex-row w-full h-16 shadow-md'>
        <div className='relative flex items-center justify-center px-4 md:justify-between'>
          <div className='flex items-center h-16 pl-2'>
            <Image width='158' height='50' src='/join-logo.png' />
          </div>
          <div className='hidden md:flex'>
            <ul className='flex justify-between'>
              <NavbarItem href='https://bit.ly/joinc4p22'>Call For Papers</NavbarItem>
              <NavbarItem href='https://bit.ly/joiningresso22'>Inscrever-se</NavbarItem>
            </ul>
          </div>
          <Menu open={open} setOpen={setOpen} />
        </div>
      </div>
      <Drawer open={open} setOpen={setOpen} />
    </>
  )
}

export default Navbar;
