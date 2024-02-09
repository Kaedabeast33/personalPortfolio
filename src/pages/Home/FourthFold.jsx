import React from 'react'

const FourthFold = () => {
  return (
    <div className="page4 h-[100vh] grid grid-cols-12 relative border-[1px] overflow-hidden border-white">
        <div className='col-span-5 flex justify-center items-center  '>
            <div className='h-[70%] w-[80%] bg-slate-200'>   </div>
        </div>
        <div className='col-span-7 mainBgColor flex flex-col items-center justify-center'>
            <div className='contactMe w-[90%] h-[50%] p-4 bg-[#f5f5f5]'>
                <p>contact me</p>
                <p>to:<span>kaedenbradshaw@gmail.com</span></p>
                <form className='h-full'>
                <p>from:<input placeholder='email'></input></p>
                <p>confirm:<input placeholder='confirm email'></input></p>
                <p>message<textarea className='w-full h-[200px] resize-none' placeholder='I will be happy to respond in 1-2 business days'></textarea></p>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default FourthFold