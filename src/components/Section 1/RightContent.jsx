import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'
const RightContent = (props) => {
  console.log(props)
  return (
<div
  id="right"
  className="w-full lg:w-2/3 flex gap-10 overflow-x-auto p-6"
>
        
        {props.users.map( function(elem,idx){
        return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag}/>

      })} 
       
    </div>
  )
}

export default RightContent
