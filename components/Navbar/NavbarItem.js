import React from 'react'

function NavbarItem({ children, href }) {
  return (
    <li className='text-black mr-3 hover:text-primary-900 cursor-pointer'>
      <a target='_BLANK' rel='noreferrer' href={href}>
        {children}
      </a>
    </li>
  )
}

export default NavbarItem;

