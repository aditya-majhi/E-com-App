import React, { useState } from 'react'
import profile from '../Assets/profile.jpg'

const Login = () => {

  const [login, setLogin] = useState(false);

  return (
    <div className='flex flex-col justify-center h-4/5'>
      {
        login ?
          <div className='login flex flex-col justify-center items-center bg-white w-[300px] md:w-[400px] rounded-lg m-auto space-y-3 pb-4'>
           <img src={profile} alt='profile' className='w-[100px] mt-4 rounded-full'/>
            <h1 className='text-2xl pt-2 font-semibold md:text-3xl'>Log In to Account</h1>
            <p className='text-sm'>Don't have an Account?<span className='text-blue-500 underline' onClick={() => {setLogin(false)}}>Sign in</span> Here.</p>
            <div className='space-y-2'>
              <div className='email bg-gray-100 px-2 py-1 space-x-2 rounded-md border'>
                <i className="fa-solid fa-envelope text-gray-400"></i>
                <input type='email' placeholder='E-mail' className='bg-gray-100' />
              </div>
              <div className='password bg-gray-100 px-2 py-0.5 space-x-1 rounded-md border'>
                <i className="fa-solid fa-key text-lg text-gray-400"></i>
                <input type='password' placeholder='Password' className='bg-gray-100' />
              </div>
            </div>
            <button className='px-4 py-1 bg-yellow-500 text-lg text-white font-semibold rounded-md'>Log In</button>
          </div> :

          <div className='signin flex flex-col justify-center items-center bg-white w-[300px] md:w-[400px] rounded-lg m-auto space-y-3 pb-4'>
            <h1 className='text-2xl pt-3 font-semibold md:text-3xl'>Create Account</h1>
            <p className='text-sm'>Already have an Account?<span className='text-blue-500 underline' onClick={() => {setLogin(true)}}>Log in</span> Here.</p>
            <div className='space-y-2'>
              <div className='username bg-gray-100 px-2 py-1 space-x-2 rounded-md border'>
                <i className="fa-solid fa-user text-gray-400"></i>
                <input type='text' placeholder='Name' className='bg-gray-100' />
              </div>
              <div className='email bg-gray-100 px-2 py-1 space-x-2 rounded-md border'>
                <i className="fa-solid fa-envelope text-gray-400"></i>
                <input type='email' placeholder='E-mail' className='bg-gray-100' />
              </div>
              <div className='password bg-gray-100 px-2 py-0.5 space-x-1 rounded-md border'>
                <i className="fa-solid fa-key text-lg text-gray-400"></i>
                <input type='password' placeholder='Password' className='bg-gray-100' />
              </div>
            </div>
            <button className='px-4 py-1 bg-yellow-500 text-lg text-white font-semibold rounded-md'>Sign In</button>
          </div>
      }
    </div>
  )
}

export default Login
