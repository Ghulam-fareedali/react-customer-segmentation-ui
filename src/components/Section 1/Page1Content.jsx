import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
 <div
  className="
min-h-[calc(100vh-80px)]
flex
flex-col
lg:flex-row
justify-between
items-center
gap-10
px-6
sm:px-8
md:px-10
lg:px-18
pt-10
sm:pt-12
lg:pt-6
pb-10
"
>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content