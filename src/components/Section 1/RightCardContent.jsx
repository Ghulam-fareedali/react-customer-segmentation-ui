import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 h-full w-full p-8 flex flex-col justify-between'>

      <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center transition-all duration-300 group-hover:scale-110'>
        {props.id + 1}
      </h2>

      <div>

        <p className='text-xl leading-relaxed text-white mb-14 transition-all duration-500 group-hover:-translate-y-2'>
          I am a dedicated professional who values teamwork,
          responsibility, continuous learning, and delivering
          high-quality results.
        </p>

        <div className='flex justify-between items-center'>

          <button
            style={{ backgroundColor: props.color }}
            className='text-white font-medium px-8 py-2 rounded-full transition-all duration-300 group-hover:scale-105'
          >
            {props.tag}
          </button>

          <button
            className='text-white text-xl rounded-full transition-all duration-300 group-hover:translate-x-2'
          >
            <i className="ri-arrow-right-line"></i>
          </button>

        </div>

      </div>

    </div>
  )
}

export default RightCardContent