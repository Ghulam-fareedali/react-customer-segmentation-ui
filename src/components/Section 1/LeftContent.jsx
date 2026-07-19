import React from 'react'
import HeroText from "./HeroText";
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='h-full w-1/2 flex flex-col justify-between -blue-200 '>
      <HeroText/>
      <Arrow />
      
    </div>
  )
}

export default LeftContent
