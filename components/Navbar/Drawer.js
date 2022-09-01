import React, { useCallback, useState } from 'react'
import NavbarItem from './NavbarItem';

function Drawer({ open }){
    return(
      <>
      { open ? (
        <div
          className={
            `transition fixed right-0 z-40 w-full p-4 shadow-md top-18 h-28 bg-gray-50 ease-in-out duration-300, ${ open? 'translate-y-0' : 'translate-y-full' }`
          }
        >
          <ul className='flex flex-col items-center justify-center w-full'>
            <li className='p-1 mb-3 font-bold text-black cursor-pointer hover:text-primary-900'>
              <a target='_BLANK' rel='noreferrer' href='https://bit.ly/joinc4p22'>
                Call For Papers
              </a>
            </li>
            <li className='p-1 font-bold text-black cursor-pointer hover:text-primary-900'>
              <a target='_BLANK' rel='noreferrer' href='https://bit.ly/joiningresso22'>
                Inscrever-se
              </a>
            </li>
          </ul>
          {open}
        </div> 
        ) : <></>
      }
      </>
    )
}

export default Drawer
