import React from 'react'

const HeroText = () => {
  return (
    <div className="p-5">
      <h3 className="mb-7 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight lg:leading-[1.3]">
        Prospective <br />
        <span className="bg-gray-200 rounded-full px-3">
          customer
        </span>
        <br />
        Segmentation
      </h3>

      <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-600">
        Prospective customer segmentation identifies potential customers
        by age, income, interests, behavior, location, and needs to
        improve marketing.
      </p>
    </div>
  )
}

export default HeroText