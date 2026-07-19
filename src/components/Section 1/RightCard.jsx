import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='group h-full overflow-hidden shrink-0 relative w-80 rounded-4xl cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl'>

      <img
        className='h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75'
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