import React from 'react'
import { useEmailContext } from '../Context/EmailContext'
import { SyncLoader } from 'react-spinners';

const EmailList = () => {

  const {emailList, isLoading, errorMsg} = useEmailContext()
  // console.log(emailList);
  
  return (
    <div className='flex flex-col gap-4'>

    { (isLoading) &&
     <div 
    style={{display: 'flex',justifyContent: 'center', alignItems: 'start',padding: '2rem 0 4rem'}}>
      <SyncLoader color="#E54065" />
      </div>
    }
    {
      (errorMsg !== '') && 
      <>
        <div className='text-theme-textColor font-bold text-xl text-center'>{errorMsg}</div>
        <div className='text-gray-500 font-semibold text-md text-center pb-6'>Try again after sometime !!</div>
      </>
    }

    {
      emailList.map((curEle)=>{
        // var time = curEle.date
        // var date = new Date(time)
        return (
          <div key={curEle.id} className='w-full border-[1.5px] border-theme-borderColor py-3 px-4  bg-white rounded-lg flex cursor-pointer hover:shadow-xl'>
        
          <div className="basis-1/12 flex justify-center">
            <div className='bg-theme-pinkColor w-12 h-12 rounded-full flex justify-center items-center'>
              <p className='text-white font-semibold text-2xl'>{curEle.from.name.charAt(0).toUpperCase()}</p>
            </div>
          </div>
  
          <div className='flex-1 px-3 text-theme-textColor pb-3'>
            <p>From: <span className='font-semibold text-theme-textColor'>{curEle.from.name} {`<${curEle.from.email}>`}</span></p>
            <p className='mb-1'>Subject: <span className='font-semibold text-theme-textColor'>{curEle.subject}</span></p>
            <p className='mb-1'>{curEle.short_description}</p>
            <div className='flex gap-11'>
            <p>{new Date(curEle.date).toLocaleString()}</p>
            {/* <span className='text-theme-pinkColor font-semibold'>Favorite</span> */}
            </div>
          </div>
        </div>
        )
      })
    }

    </div>
  )
}

export default EmailList
