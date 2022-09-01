import React from 'react'
import Image from 'next/image'

function Partners(){
  return(
    <div className='py-16 bg-background'>
      <div className='flex flex-col py-2 mx-20'>
        <div>
          <p className='text-xl font-semibold text-white md:text-3xl'>Parceiros</p>
        </div>
        <div className='flex justify-center w-full'>
          <Image width="370" height='190' src='/sebrae.png'></Image>
        </div>
      </div>
    </div>
    )
}

export default Partners
