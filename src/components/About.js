import React from 'react'
import AboutComponent from './aboutComponent'
import image1 from '../Assets/deliveryImage.jpg'
import image2 from '../Assets/Packaging.jpg'

const About = () => {
  return (
    <div className='mt-2 flex flex-col items-center justify-center bg-sky-100 space-y-4'>
      <div className='who flex flex-col justify-center items-center space-y-1'>
        <div className='text-center text-lg pt-2 sm:text-xl font-serif'>
          Don't hesitate <span className='font-bold text-[#2c5f58]'>Get</span> It..
        </div>
        <h1 className='text-center text-2xl font-bold sm:text-3xl'>About Us</h1>
        <section className='pt-1'>
          <h3 className='text-xs text-center sm:text-lg'>We are an E-commerce company , At Bhubaneswar,Odisha.</h3>
          <h3 className='text-xs text-center sm:text-lg'>Giving our customers top notch experience in product since 2003.</h3>
        </section>
      </div>
      <div className='what md:space-y-4 w-[100%]'>
        <AboutComponent 
          title="Fast Delivery"
          img={image1}
          para="We deliver your Product between 7 to 10 days."
        />
        <AboutComponent 
          title="Safe Packaging"
          img={image2}
          para="Our packaging procedure ensures it's free from any type of germs."
        />
      </div>
    </div>
  )
}

export default About
