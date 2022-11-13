import React from 'react'

const Contact = () => {
  return (
    <div className='p-2 space-y-6 flex flex-col items-center md:flex-row justify-center md:space-x-3 md:h-4/5'>
      <section className='md:w-2/5 space-y-2'>
        <h1 className='text-2xl font-bold md:text-3xl'>Contact Us</h1>
        <p className='text-sm'>Need to get in touch with us?Either fill out the form with your inquiry or find the <span className='text-yellow-500 underline'>xyz@email.com</span> you'd like to contact below.</p>
      </section>
      <section className='form space-y-3'>
        <div className='name flex w-11/12'>
          <div className='flex flex-col'>
            <label htmlFor='first-name' className='font-serif'>First Name</label>
            <input type="text" name='first-name' className='w-4/5 border rounded-md border-gray-500 outline-none px-2 py-0.5'/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='last-name' className='font-serif'>Last Name</label>
            <input type='text' name='last-name' className='w-4/5 border rounded-md border-gray-500 outline-none px-2 py-0.5'/>
          </div>
        </div>
        <div className='email flex flex-col'>
          <label htmlFor='email' className='font-serif'>E-mail</label>
          <input type='email' name='email' className='w-4/5 border rounded-md border-gray-500 outline-none px-2 py-0.5'/>
        </div>
        <div className='enquiry space-y-1'>
          <label htmlFor='enquiry' className='font-serif'>What can we help you with?</label>
          <textarea name='enquiry' className='w-4/5 h-[100px] border rounded-md border-gray-500 outline-none px-2 py-0.5 resize-none'></textarea>
        </div>
        <button className='px-4 py-1 bg-yellow-500 text-lg text-white font-semibold rounded-md'>SUBMIT</button>
      </section>
    </div>
  )
}

export default Contact
