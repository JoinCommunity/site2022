import React from 'react'
import Image from 'next/image'

function AboutUs(){
  return(
    <div className='bg-background'>
      <div className='flex flex-row py-12 mx-20 md:py-24'>
        <div>
          <p className='text-xl font-semibold text-white md:text-3xl'>JoinCommunity é uma ação conjunta</p>
          <p className='mb-6 text-xl font-semibold text-white md:text-3xl'>Dos diversos grupos de tecnologia de goiania!</p>
          <p className='my-5 text-gray-500'>
            JoinCommunity é uma ação conjunta dos diversos grupos de tecnologia ligados ao ecossistema goiano de inovação para levar conhecimento ao público técnico e empreendedores da nossa região, trazendo profissionais de relev0ncia nacional e influenciadores regionais.
          </p>
          <p className='my-5 text-gray-500'>
            A primeira edição do JoinCommunity aconteceu em 2013. Desde então, o evento vem crescendo e incluindo novas comunidades. Estamos passando conhecimento, experiência e unindo o público com as empresas e profissionais para falar sobre tecnologia, inovação e desenvolvimento.
          </p>
          <p className='my-5 text-gray-500'>
            Queremos deixar um legado sobre conhecimento tecnológico e promover a experimentação e vivência em desenvolvimento de software para os participantes e principalmente criar e manter um ambiente seguro e focado em educação e na excelência em eventos de tecnologia e inovação.  
          </p>
        </div>
      </div>
    </div>
    )
}

export default AboutUs
