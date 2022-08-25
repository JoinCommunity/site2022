import Image from 'next/image';
import React from "react"

function index(){
  return(
    <div>
      <div className='flex h-full w-full'>
        <Image width='1920' height='780' alt='backgroundimg' src='/bg.png'/>
      </div>
    </div>
    )
}

export default index
