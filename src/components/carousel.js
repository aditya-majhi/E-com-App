import React from 'react'
import image from '../Assets/shop-img.jpg'

const Carousel = () => {
    return (
        <>
            <div className='mt-2 relative'>
                <div className='absolute h-full w-full p-2 bg-black/70 flex flex-col justify-center'>
                    <h2 className='text-white font-bold text-2xl mx-auto md:mx-12 md:text-5xl'>Get Upto <span className='text-yellow-500 text-3xl md:text-6xl'>50%</span> Off,</h2>
                    <h2 className='text-white font-bold text-xl mx-auto md:mx-12 md:text-3xl md:pt-2'>On your favorite Brands</h2>
                    <div className='flex mx-auto space-x-2 mt-4 md:mx-12'>
                        <button className='text-yellow-500 border border-yellow-500 px-2 py-1 rounded-lg font-semibold hover:text-yellow-600 hover:border-yellow-600 '>Log In</button>
                        <button className='text-white bg-yellow-500 border border-yellow-500 rounded-lg px-2 py-1 font-semibold hover:bg-yellow-600'>Sign In</button>
                    </div>
                </div>
                <img className='max-h-[450px] object-cover w-full' src={image} alt="" />
            </div>
        </>
    )
}

export default Carousel
