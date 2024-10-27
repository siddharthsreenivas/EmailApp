import React from 'react'
import { useEmailContext } from '../Context/EmailContext'

const EmailList = () => {

  const test = useEmailContext()

  return (
    <div>
      <div className='w-full border-[1.5px] border-theme-borderColor py-3 px-4  bg-white rounded-lg flex'>
        
        <div className="basis-1/12 flex justify-center">
          <div className='bg-theme-pinkColor w-12 h-12 rounded-full flex justify-center items-center'>
            <p className='text-white font-semibold text-2xl'>F</p>
          </div>
        </div>

        <div className='flex-1 px-3 text-gray-500 pb-3'>
          <p>From: <span className='font-semibold text-theme-textColor'>{`<foo.bar@gmail.com>`}</span></p>
          <p className='mb-1'>Subject: <span className='font-semibold text-theme-textColor'>Lorem Ipsum</span></p>
          <p className='mb-1'>Aenean ut odio eu risus sollicitudin vehicula volutpat vel ante.</p>
          <div className='flex gap-11'>
          <p>26/02/2020 10:30am</p><span className='text-theme-pinkColor font-semibold'>Favorite</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailList
