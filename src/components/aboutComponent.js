import React from 'react'

const AboutComponent = (props) => {
  return (
    <div className='w-4/5 flex flex-col m-auto md:flex-row items-center justify-between pb-2'>
      <h1 className='text-center font-semibold text-xl py-1 md:hidden'>{props.title}</h1>
      <img src={props.img} alt='delivery Image' className='m-auto border rounded-lg h-[150px] w-[250px] object-cover sm:h-[200px] sm:w-[300px] shadow-lg'/>
      <div className='md:w-1/2'>
        <h1 className='text-center font-semibold text-xl sm:text-2xl py-1 hidden md:flex'>{props.title}</h1>
        <p className='text-sm p-2 sm:text-lg'>{props.para}</p>
      </div>
    </div>
  )
}

export default AboutComponent
