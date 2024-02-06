import React, { useContext } from 'react'

import png from '../assets/png.png'

const Navbar = () => {
    
   
  return (
    <nav className='fixed whiteColor w-[100vw] overflow-auto justify-center sm:justify-between  h-[50px] z-50 shadow-lg '>
        
            <ul className='hidden sm:flex h-full w-[40%] items-center p-2 gap-10'>
                <li className='hover:primaryTextColor text-[16px]'>Home</li>
                <li className='hover:primaryTextColor text-[16px]'>Projects</li>
                <li className='hover:primaryTextColor text-[16px]'>About Me</li>
                <li className='hover:primaryTextColor text-[16px]'>Contact Me</li>
            </ul>
        
       <img height={"70px"} width={"70px"} src={png} alt="logo "></img>
       <div className=''></div>
       
    </nav>
  )
}

export default Navbar