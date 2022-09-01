import React from 'react'
import Image from 'next/image'

function Partners(){
  return(
    <div className='bg-background h-96 py-16'>
      <div className='flex flex-col mx-20 py-2'>
        <div>
          <p className='text-white text-3xl font-semibold'>Parceiros</p>
        </div>
        <div className='w-full flex justify-center '>
          <Image width="370" height='190' src='/sebrae.png'></Image>
        </div>
      </div>
    </div>
    )
}

export default Partners
