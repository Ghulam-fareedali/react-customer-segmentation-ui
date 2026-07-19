import React from 'react'
import HeroText from "./HeroText";
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className="
w-full
lg:w-1/2
flex
flex-col
justify-between
items-start
">
      <HeroText/>
      <Arrow />
      
    </div>
  )
}

export default LeftContent
