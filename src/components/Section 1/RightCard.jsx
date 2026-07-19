import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
   <div className="group relative overflow-hidden shrink-0 w-64 sm:w-72 lg:w-80 h-[400px] sm:h-[500px] lg:h-full rounded-4xl cursor-pointer">

      <img
        className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
        src={props.img}
        alt=""
      />

      <RightCardContent
        id={props.id}
        color={props.color}
        tag={props.tag}
      />

    </div>
  )
}

export default RightCard