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
      <div className='flex flex-col h-full w-full'>
        <div className="w-full h-[620px] bg-cover bg-center" style={{backgroundImage: "url('/speaker-conference.jpg')"}}>
          <div className='flex flex-col w-full h-full justify-center bg-[rgba(0,0,0,0.3)]'>
            <div className='flex justify-center text-white text-xl font-semibold'>
              30 de Outubro, 2022
            </div>
            <div className='flex justify-center text-white mb-2 text-6xl font-bold'>
              JoinCommunity 2022
            </div>
            <div className='flex items-center justify-center text-white mb-10 text-1xl font-bold'>
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
