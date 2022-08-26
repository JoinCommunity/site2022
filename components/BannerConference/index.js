import Image from 'next/image';
import React from "react"
import Timer from './Timer';

function BannerConference(){
  return(
    <div>
      <div className='flex flex-col h-full w-full'>
        <div className="w-full h-[620px] bg-cover bg-center" style={{backgroundImage: "url('/speaker-conference.jpg')"}}></div>
        <Timer />
      </div>
    </div>
    )
}

export default BannerConference
