import dynamic from 'next/dynamic';
import React from "react"
import { Button } from '@components/Base';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faLocationDot  } from '@fortawesome/free-solid-svg-icons'

const Timer = dynamic(
  () => import('./Timer'),
  { ssr: false }
)

function BannerConference(){
  return(
    <div>
      <div className='flex flex-col w-full h-full'>
        <div className="w-full h-[620px] bg-cover bg-center" style={{backgroundImage: "url('/speaker-conference.jpg')"}}>
          <div className='flex flex-col w-full h-full justify-center bg-[rgba(0,0,0,0.3)]'>
            <div className='flex justify-center text-sm font-semibold text-white md:text-xl'>
              30 de Outubro, 2022
            </div>
            <div className='flex justify-center mb-2 text-3xl font-bold text-white md:text-6xl'>
              JoinCommunity 2022
            </div>
            <div className='flex items-center justify-center mb-10 text-xs font-bold text-white md:text-1xl'>
              <FontAwesomeIcon icon={faLocationDot} />
              <span className='ml-2'>Sebrae - Av. T-3 n.1000 Setor Bueno - Goiânia - GO </span>
            </div>
            <Button href="https://bit.ly/joiningresso22">
              Garanta seu ingressso!
            </Button>
          </div>
        </div>
        <Timer />
      </div>
    </div>
    )
}

export default BannerConference
