import React from 'react'
import logo from '../Assets/logo.png'

const Footer = () => {
    return (
        <>
            <footer className='h-[200px] flex-col-reverse bg-gray-600 items-center justify-center w-full'>
                <div>
                    <div className='flex space-x-2 justify-center py-4'>
                        <img src={logo} alt='' className='h-10' />
                        <h1 className='text-2xl font-semibold text-yellow-500'><span className='text-3xl text-[#098f7b]'>E</span>-Cart</h1>
                    </div>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <h1 className='text-lg font-semibold'>SUBSCRIBE TO OUR NEWSLETTER</h1>
                    <div className='flex items-center bg-white border border-none rounded-xl pl-2 space-x-1 justify-between w-4/5 mx-auto md:w-1/2'>
                        <input placeholder='Enter your e-mail' className='w-3/4 px-2 outline-none' />
                        <button className="bg-[#2e796f] text-white py-1 px-2 border border-[#2e796f] rounded-r-xl">SUBMIT</button>
                    </div>
                </div>
                <div className='flex justify-center space-x-4 items-center mt-4 sm:space-x-9 md:space-x-15'>
                    <i className="fa-brands fa-facebook text-xl text-gray-800 hover:text-gray-900 cursor-pointer"></i>
                    <i className="fa-brands fa-instagram text-xl text-gray-800 hover:text-gray-900 cursor-pointer"></i>
                    <i className="fa-brands fa-youtube text-xl text-gray-800 hover:text-gray-900 cursor-pointer"></i>
                    <i className="fa-brands fa-twitter text-xl text-gray-800 hover:text-gray-900 cursor-pointer"></i>
                </div>
            </footer>
        </>
    )
}

export default Footer
