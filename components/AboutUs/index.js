import React from 'react'
import Image from 'next/image'

function AboutUs(){
  return(
    <div className="bg-background h-96">
      <div className='flex flex-row mx-20 py-24'>
        <div>
          <p className='text-white text-3xl font-semibold'>JoinCommunity é uma ação conjunta</p>
          <p className='text-white text-3xl font-semibold mb-6'>Dos diversos grupos de tecnologia de goiania!</p>
          <p className='text-gray-500 my-5'>
            JoinCommunity é uma ação conjunta dos diversos grupos de tecnologia ligados ao ecossistema goiano de inovação para levar conhecimento ao público técnico e empreendedores da nossa região, trazendo profissionais de relev0ncia nacional e influenciadores regionais.
          </p>
          <p className='text-gray-500 my-5'>
            A primeira edição do JoinCommunity aconteceu em 2013. Desde então, o evento vem crescendo e incluindo novas comunidades. Estamos passando conhecimento, experiência e unindo o público com as empresas e profissionais para falar sobre tecnologia, inovação e desenvolvimento.
          </p>
          <p className='text-gray-500 my-5'>
            Queremos deixar um legado sobre conhecimento tecnológico e promover a experimentação e vivência em desenvolvimento de software para os participantes e principalmente criar e manter um ambiente seguro e focado em educação e na excelência em eventos de tecnologia e inovação.  
          </p>
        </div>
      </div>
    </div>
    )
}

export default AboutUs
