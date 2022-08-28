import React from 'react'
import Image from 'next/image'

function AboutUs(){
  return(
    <div className="bg-background h-96">
      <div className='flex flex-row mx-20 py-24'>
        <div>
          <p className='text-white text-3xl font-semibold'>JoinCommunity é uma ação conjunta</p>
          <p className='text-white text-3xl font-semibold mb-6'>Dos diversos grupos de tecnologia de goiania!</p>
          <p className='text-gray'>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
          </p>
        </div>
        <div>
          <Image width='378' height='278' src='/palestra-join.png' ></Image>
        </div>
      </div>
    </div>
    )
}

export default AboutUs
