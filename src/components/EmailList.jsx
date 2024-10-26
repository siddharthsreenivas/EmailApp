import React from 'react'

const EmailList = () => {
  return (
    <div>
      <div className='w-full border-[1.5px] border-theme-borderColor py-3 px-4 h-36 bg-white rounded-lg flex'>
        
        <div className="bg-yellow-100 w-[8%] flex justify-center">
          <div className='bg-theme-pinkColor w-11 h-11 rounded-full flex justify-center items-center'>
            <p className='text-white font-semibold text-2xl'>F</p>
          </div>
        </div>

        <div className='bg-green-100 flex-1 px-3'>
          <p>From: test@gmial.com</p>
        </div>
      </div>
    </div>
  )
}

export default EmailList