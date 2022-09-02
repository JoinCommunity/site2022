import React, { useCallback, useState } from 'react'

function Drawer({ open }){
  return(
    <div
      className={
        `transition fixed right-0 z-40 w-72 shadow-2xl top-18 h-full bg-gray-900 ease-in-out duration-300, ${ open? 'translate-x-0' : 'translate-x-full' }`
      }
    >
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center w-64 p-5 m-5 border border-white'>
          <span className='mb-5 text-white'>
            Aproveite nosso primeiro lote promocional, e garanta sua presença no evento!
          </span>
          <div className='w-full p-1 font-semibold text-center text-white cursor-pointer bg-primary-900'>
            <a target='_BLANK' rel='noreferrer' href='https://bit.ly/joiningresso22'>
              Garanta seu ingresso
            </a>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center w-64 p-5 m-5 border border-white'>
          <span className='mb-5 text-white'>
            Envia sua proposta de palestra para o JoinCommunity 2022 e vamos juntos movimentar nossa comunidade!
          </span>
          <div className='w-full p-1 font-semibold text-center text-white cursor-pointer bg-primary-900'>
            <a target='_BLANK' rel='noreferrer' href='https://bit.ly/joinc4p22'>
              Call For Papers
            </a>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Drawer
